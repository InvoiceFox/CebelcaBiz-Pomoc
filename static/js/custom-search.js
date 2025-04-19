(function() {
  // Search configuration
  const fuseOptions = {
    shouldSort: true,
    includeMatches: true,
    threshold: 0.2,           // Lower threshold for more precise matches
    tokenize: true,
    location: 0,
    distance: 150,            // Increased distance for better fuzzy matching
    maxPatternLength: 32,
    minMatchCharLength: 2,    // Reduced to catch shorter terms
    useExtendedSearch: true,  // Enable extended search for more powerful queries
    keys: [
      { name: "title", weight: 1.0 },    // Increased weight for title matches
      { name: "content", weight: 0.6 },  // Slightly increased content weight
      { name: "section", weight: 0.4 }   // Slightly increased section weight
    ]
  };

  // DOM elements
  const searchInput = document.getElementById('book-search-input');
  const searchResults = document.getElementById('book-search-results');
  const searchSpinner = document.querySelector('.book-search-spinner');
  
  // Initialize search when the page loads
  let fuse;
  let searchData;
  
  // Initialize search functionality
  function initSearch() {
    if (!searchInput) return;
    
    // Show spinner while loading
    if (searchSpinner) searchSpinner.classList.remove('hidden');
    
    // Load search data
    console.log('Fetching search data from:', window.location.origin + '/navodila/index.json');
    fetch(window.location.origin + '/navodila/index.json')
      .then(response => {
        if (!response.ok) {
          console.error('Network response was not ok:', response.status, response.statusText);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Search data loaded:', data);
        if (!data || !data.pages || !Array.isArray(data.pages)) {
          console.error('Invalid search data format:', data);
          throw new Error('Invalid search data format');
        }
        searchData = data.pages;
        console.log('Creating Fuse index with', searchData.length, 'pages');
        
        // Log content of each page for debugging
        console.log('Checking for specific content in search data:');
        const searchTerm = 'poskenirate';
        searchData.forEach((page, index) => {
          if (page.content && page.content.includes(searchTerm)) {
            console.log(`Found "${searchTerm}" in page ${index}:`, {
              title: page.title,
              url: page.url,
              section: page.section,
              contentPreview: page.content.substring(
                Math.max(0, page.content.indexOf(searchTerm) - 50),
                Math.min(page.content.length, page.content.indexOf(searchTerm) + 50)
              )
            });
          }
        });
        
        fuse = new Fuse(searchData, fuseOptions);
        
        // Hide spinner
        if (searchSpinner) searchSpinner.classList.add('hidden');
        
        // Add event listeners
        searchInput.addEventListener('keyup', performSearch);
        searchInput.addEventListener('focus', performSearch);
        
        // Keyboard shortcut
        document.addEventListener('keypress', function(e) {
          if (e.target.value !== undefined) return;
          if (searchInput === document.activeElement) return;
          
          const hotkeys = searchInput.getAttribute('data-hotkeys') || '';
          const char = String.fromCharCode(e.charCode);
          
          if (hotkeys.indexOf(char) >= 0) {
            searchInput.focus();
            e.preventDefault();
          }
        });
        
        // Perform search if there's already a value
        if (searchInput.value) {
          performSearch();
        }
      })
      .catch(error => {
        console.error('Error loading search data:', error);
        if (searchSpinner) searchSpinner.classList.add('hidden');
      });
  }
  
  // Perform search
  function performSearch() {
    // Clear previous results
    while (searchResults.firstChild) {
      searchResults.removeChild(searchResults.firstChild);
    }
    
    // Get search query
    const query = searchInput.value.trim();
    if (!query || !fuse) return;
    
    console.log('Performing search for:', query);
    
    // Perform search
    const results = fuse.search(query).slice(0, 10);
    
    // Log detailed search results
    console.log('Search results:', results);
    console.log('Number of results:', results.length);
    
    if (results.length > 0) {
      console.log('Top result details:');
      console.log('- Title:', results[0].item.title);
      console.log('- URL:', results[0].item.url);
      console.log('- Section:', results[0].item.section);
      console.log('- Match score:', results[0].score);
      console.log('- Matches:', results[0].matches);
    }
    
    // Display results
    if (results.length === 0) {
      const noResults = document.createElement('li');
      noResults.textContent = 'No results found';
      searchResults.appendChild(noResults);
      console.log('No results found for query:', query);
      return;
    }
    
    results.forEach((result, index) => {
      const item = result.item;
      
      const li = document.createElement('li');
      const a = document.createElement('a');
      const small = document.createElement('small');
      const context = document.createElement('div');
      
      a.href = item.url;
      a.textContent = item.title;
      small.textContent = item.section;
      context.className = 'search-result-context';
      
      // Extract context from matches
      if (result.matches && result.matches.length > 0) {
        // Find content matches
        const contentMatches = result.matches.find(match => match.key === 'content');
        if (contentMatches && contentMatches.indices.length > 0) {
          // Get the first match
          const firstMatch = contentMatches.indices[0];
          const start = Math.max(0, firstMatch[0] - 40);
          const end = Math.min(item.content.length, firstMatch[1] + 40);
          let snippet = item.content.substring(start, end);
          
          // Add ellipsis if needed
          if (start > 0) snippet = '...' + snippet;
          if (end < item.content.length) snippet = snippet + '...';
          
          context.textContent = snippet;
        }
      }
      
      li.appendChild(a);
      li.appendChild(small);
      li.appendChild(context);
      searchResults.appendChild(li);
      
      console.log(`Result ${index + 1}:`, {
        title: item.title,
        url: item.url,
        section: item.section,
        score: result.score,
        matches: result.matches
      });
    });
  }
  
  // Initialize search when the DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
  } else {
    initSearch();
  }
})();
