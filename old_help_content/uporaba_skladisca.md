    Program za pisanje računov, za podjetja in NVO - Čebelca BIZ                        

*   [Čebelca Računi](/)
*   [Skladišče](/skladisce/)
*   [Potni Nalogi](/potni-nalogi/)
*    · 
*   [Čebelca MOBI](/mobi/)
*    · 
*   [Prijava za uporabnike](/manage/sign-in.html)

p a img { border: 1px solid #999999; padding: 1px; }

Navodila za uporabo modula Skladišče
------------------------------------

  

**Vsebina**

*   [Osnove](#inv-sent)
    *   Čemu je namenjen modul Skladišče?
    *   Kje vidim trenutno zalogo?
    *   Kako je vodenje skladišča povezano z računi?
*   [Podrobneje](#preinv)
    *   Kaj predstavljajo 3 vrste dokumentov (Nabava, Prodaja, Prenos)?
    *   Kako vzpostavim začetno stanje?
    *   Kako se vrednoti zaloga?
    *   Kje vidim zgodovino artikla?
*   [Več skladišč](#einv)
    *   Kdaj naj uporabim več skladišč?
    *   Kako se vrednoti zaloga v primeru več skladišč?
*   [Delovni nalogi, kosovnice](#einv)
    *   Kdaj potrebujem delovne naloge?
    *   Kaj pomeni tipka sestava (kosovnica)?
    *   Kako deluje delovni nalog?
*   [FIFO vrednotenje zaloge](#fifo)
    *   Kaj pomeni FIFO?
    *   Kako vidim nabavno vrednost zaloge?
    *   Ponovni preračun zaloge?
    *   Pri preračunu je prišlo do negativne zaloge
*   [Inventura](#inventura)
    *   Kako ustvarimo inventurni dokument?
    *   Kako poknjižimo viške?
    *   Kako poknjižimo manjke?

  
  

### Osnove

#### Čemu je namenjen modul Čebelca Skladišče?

Modul je namenjen vodenju zaloge. Lahko ga uporabljate neodvisno ali pa v povezavi s Čebelca Računi.

Nabavna vrednost zaloge se računa po sistemu FIFO (first in, first out), zato se lahko nabavne cene za iste artikle tudi razlikujejo.

![](/public/img/skladisc1.png)

#### Kje vidim trenutno zalogo?

Nad zalogo imate pregled na tabulatorju **Zaloga**. Program prikaže zalogo za vsa vaša skladišča skupaj, s klikom na posamezno skladišče pa tudi za vsako posebej. Tu vidite tako zalogo posameznega artikla kot tudi vrednost njegove zaloge v FIFO nabavni in prodajni vrednosti. Nabavno vrednost vidite, ko kliknete na posamezno skladišče. Izberete lahko tudi datum, za katerega vas zaloga zanima.

#### Kako je vodenje skladišča povezano z računi?

Ko robo prodate v skladišču, naredite prodajni dokument. Ta razknjiži vašo zalogo in se lahko natisne kot dobavnica (z ali brez cen). Ko želite za prodano izdati račun, desno pri nabavnemu dokumentu pritisnete tipko **V račun** in naredil se vam bo račun. Pri računu potem po potrebi le še prilagodite datume (npr. rok plačila), drugi podatki pa se vnesejo že pri kreiranju prodajnega dokumenta, zato ni dvojnega dela.

  

### Podrobneje

#### Kaj predstavljajo 3 vrste dokumentov (Nabava, Prodaja, Prenos)?

Na zalogo vplivajo 3 vrste dokumentov. Nabavni dokument doda artikle na zalogo, prodajni pa jih iz zaloge odvzame. Če uporabljate več skladišč, lahko uporabite še prenos, ki prenese artikle iz enega vašega skladišča v drugega.

#### Kako vzpostavim začetno stanje?

Za vzpostavitev začetnega stanja naredite nabavni dokument, ki ga namesto s številko poimenujete npr. "ZAČETNO STANJE".

#### Kako se vrednoti zaloga?

Zaloga se vrednoti po sistemu FIFO. Ta pomeni, da so vedno najprej prodani (odšteti) artikli, ki so bili kupljeni prej. To pride do izraza, ko isti artikel ne kupite po isti ceni.

#### Kje vidim zgodovino artikla?

Na seznamu artiklov in pri zalogi lahko desno kliknete tipko "Dnevnik". Tu boste videli vse, kar se je dogajalo z izbranim artiklom. Če Dnevnik kliknete v posameznem skladišču, boste videli dogodke, ki se tičejo tega skladišča.

  

### Več skladišč

#### Kdaj naj uporabim več skladišč?

Več skladišč ni namenjeno temu, da npr. ločite artikle po kategorijah ali jih uproabite zaradi lepšega. Prinesejo tudi določene omejitve in FIFO se računa na nivoju skladišč, zato morajo biti stvarna.

Uporabite jih, ko vam tako reče računovodja, kar je lahko odvisno od samega vašega poslovanja ali pa od tega, da imate res več fizično ločenih skladišč.

#### Kako se vrednoti zaloga v primeru več skladišč?

FIFO se računa na nivoju posameznih skladišč. Npr. artikel prodan iz skladišča B bo najzgodnejši kupljeni (še na zalogi) iz skladišča B, tudi če je bil pred tem kupljen v skladišče A. En prodajni ali nabavni dokument je lahko vezan le na eno skladišče. Ne morete narediti prodajnega dokumenta, ki bi prodalo artikle iz več skladišč.

  

### Delovni nalogi, kosovnice

#### Kdaj potrebujem delovne naloge?

Delovne naloge potrebujete, če imate npr. proizvodno podjetje. Delovni nalog iz zaloge vzame artikle (material) in na zalogo doda druge artikle (izdelke). Če nimate proizvodnje, potem tega ne potrebujete.

#### Kaj pomeni tipka sestava (kosovnica)?

Artikel (izdelek) je lahko sestavljen iz drugih artiklov (material). S tipko **sestava** izdelkom določite sestavne dele.

#### Kako deluje delovni nalog?

Pri delovnem nalogu vnesete izdelke, ki jih želite izdelati, program pa bo na podlagi sestave dodal material. Material se odšteje iz zaloge, izdelki pa se prištejejo na zalogo. Izdelki lahko gredo v drugo skladišče, kot je vir materiala.

  

### FIFO vrednotenje zaloge

#### Kaj pomeni FIFO?

FIFO je kratica za First In - First Out (Prvi noter - prvi ven). Nanaša se na vrednotenje zaloge po nabavnih vrednostih, kar bo zanimalo vašega računovodjo.

Nek artikel lahku kupite po različnih nabavnih vrednostih. Nabavne cene vpisujete pri izdelavi nabavnega dokumenta (prevzemnice). FIFO pomeni da ko določeno število kosov artikla prodate, se vrednostno najprej odšteje artikel, ki je bil najprej kupljen.

Primer: kupite artikel A101 najprej 10 kosov po 10 €, naslednjič pa 10 kosov po 12 €. Ko prodate 12 kosov se vaša vrednost zaloge zmanjša za 10x10€ + 2x12€ in na zalogi vam ostane 8x12€.

Kako točno razporedi prodaje lahko vidite v FIFO dnevniku pri pregledu zaloge po posameznem skladišču.

#### Kako vidim nabavno vrednost zaloge?

Nabavne vrednosti zaloge določenega artikla program ne prikazuje za vsa skladišča skupaj, jo pa prikaže ko greste na posamezno skladišče, saj mora FIFO potekati na nivoju skladišč. Preko tipke **Seštevek** zgoraj desno lahko vidite tudi skupno nabavno vrednost celotnega skladišča.

#### Ponovni preračun zaloge?

FIFO sistem je dokaj kompleksen mehanizem, ki je vezan na celotno verigo dokumentov za nazaj. To pomeni, da če spremenite nek dokument v preteklosti, mora program "premetati" artikle, da step dobi spet prave FIFO vrednosti v sedanjosti. Primeri spremembe so npr. dodajanje ali brisanje prodaje ali nabave, menjava datuma, kar spremeni zalogo v vmesnem času, izbris, dodajanje ali spreminjanje postavke v nabavnem ali prodajnem dokumentu.

Če urejate dokumente za nazaj, je najbolje da poženete popolni preračun zalog. To storite na **Nastavitve > Skladišče > Nastavi preračun zaloge**. Potem obiščete stran zaloga ali dokumenti in zgoraj vas bo čakalo opozorilo o tem, da želi program ponovno preračunati zalogo od 1.1.2000. Kliknite **Preračunaj sedaj**.

Program skuša sam zaznati kdaj mora sprožiti preračun in od katerega datuma, a pri večjih spremembah to lahko ne deluje 100%, zato je priporočljivo, da ukaz v takem primeru poženete še sami. Da stvari niso usklajene vidite, če dnevnik artikla prikazuje drugo vrednost zaloge, kot jo kaže sama stran zaloge.

Pozor: pri zalogi je pomemben datum. Če ste npr. naredili prodajni dokument v prihodnosti, bo danes artikel še vedno na zalogi, v efekt pa bo dokument prišel na svoj datum. Prav tako lahko vidite zalogo za katerikoli pretekli (ali prihodnji) datumi.

  
  

#### Pri preračunu je prišlo do negativne zaloge

Če ste npr. spreminjali dokumente v preteklosti, se pri preračunu lahko pojavi obvestilo da je pri določenem artikli pri določeni prodaji prišlo do negativne zaloge. Npr. prodajni dokument skuša odpisati 5 kosov, na zalogi pa sta le še 2.

Ker FIFO sistem ne more vrednotiti zaloge z vmesnimi negativnimi zalogami in ker je fizično nemogoče, da je šlo iz skladišča več artiklov, kot jih je bilo na zalogi morate v tem primeru rešiti situacijo

Najprej kliknite na modro širfo artikla in odprl se vam bo dnevnik artikla. Tu si oglejte tekoče stanje in opazili boste, da je artikel na neki točki v minusu. Vzroka sta lahko naslednja:

*   Artikel ima nabavo, a je ta datumsko kasneje kot prodaja. To je pogosta napaka in pomeni le, da ste vnesli napačen datum prodaje ali nabave. Popravite datume
*   Artikel ni na zalogi in le sprememba datuma dokumenta ne bo rešila težave. To pomeni, da ste v nekem trenutku vpisali ali premajhno nabavo, ali jo pozabili vnesti, ali pa ste vnesli preveliko prodajo

  

### Inventura

#### Kako ustvarimo inventurni dokument?

Obiščete stran **Podatki**, zgoraj desno. Na strani najdete **Skladišče » Inventurni dokument**. Izberete skladišče in datum ter pritisnete **Prenesi**. Prenese se vam seznam artiklov z nabavno vrednostjo, zadnjo nabavno ceno in trenutno količino na zalogi. Desno od trenutne količine je prazen stolpec, kamor vpišete **količino ugotovljeno ob inventuri**, desno od tega, pa stolpec, kjer Excel sam izračuna **inventurno razliko**.

![](/public/img/inventurna_razlika.png)

#### Kako poknjižimo inventurne razlike?

To je odvisno od vrste izdelkov (ali so pokvarljivi npr.) a na splošno morate ugotoviti kako je lahko prišlo do razlike.

Npr. pri manjkih je običajno treba ugotoviti ali so posledica kala, slabih izdelkov, ali so bili vrnjeni dobavitelju ali gre npr. za krajo ali kaj manjko za katerega mora nekdo odgovarjati. Glede na to potem tudi poknjižite, kar storite z **prodajnim dokumentom**. Lahko se zgodi, da morate pri manjku tudi plačati DDV. V besedilo nad tabelo napišete, da gre za inventurno razliko in bolje definirate razloge.

Pri viških prav tako ugotovite kako je lahko do tega prišlo in potem napišete **Nabavni dokument**. V besedilu nad tebelo napišete da gre za inventurno razliko in podrobneje opišete razlog.  
  

* * *

Če imate dodatna vprašanja, [nam pišite](contact-si.html).

  

[**« na osnovno stran**](/)

[Prijava](/manage/sign-in.html) | [Kontakt](/contact-si.html) | [Pogosta vprašanja](/faq-si.html) | [Pogoji uporabe](/tos-si.html) | [Zasebnost](/tos-si.html#priv)

**REFAKTOR d.o.o.**  
Velika Loka 21, 1290 Grosuplje, Slovenija  
  
© 2009-2015, Vse pravice pridržane.

[Blog](https://cebelca-biz.blogspot.com/) | [Facebook](https://www.facebook.com/cebelcabiz/) | [Twitter](https://twitter.com/cebelcabiz)

Na teh straneh ne uporabljamo piškotkov. Razen sejnega piškotka, ko se prijavite v program, čemur so le-ti namenjeni.

var \_UsrJoyP = {u: ("https:"==document.location.protocol?"https":"http")+"://www.usrjoy.com", 'doFAQ': window.doFAQHere || false, 'doWorklog': window.doWorklogHere || false}; document.write(unescape("%3Cscript src='"+\_UsrJoyP.u+"/tstatic/41/5.js' type='text/javascript'%3E%3C/script%3E"+ "%3Clink rel='stylesheet' href='"+\_UsrJoyP.u+"/tstatic/41/4.css' type='text/css'%3E%3C/link%3E")); function deleteCookie1(c\_name) { document.cookie = encodeURIComponent(c\_name) + "=deleted; expires=" + new Date(0).toUTCString(); } function Get\_Cookie( check\_name ) { // first we'll split this cookie up into name/value pairs // note: document.cookie only returns name=value, not the other components var a\_all\_cookies = document.cookie.split( ';' ); var a\_temp\_cookie = ''; var cookie\_name = ''; var cookie\_value = ''; var b\_cookie\_found = false; // set boolean t/f default f for ( i = 0; i < a\_all\_cookies.length; i++ ) { // now we'll split apart each name=value pair a\_temp\_cookie = a\_all\_cookies\[i\].split( '=' ); // and trim left/right whitespace while we're at it cookie\_name = a\_temp\_cookie\[0\].replace(/^\\s+|\\s+$/g, ''); // if the extracted name matches passed check\_name if ( cookie\_name == check\_name ) { b\_cookie\_found = true; // we need to handle case where cookie has no value but exists (no = sign, that is): if ( a\_temp\_cookie.length > 1 ) { cookie\_value = unescape( a\_temp\_cookie\[1\].replace(/^\\s+|\\s+$/g, '') ); } // note that in cases where cookie is initialized but no value, null is returned return cookie\_value; break; } a\_temp\_cookie = null; cookie\_name = ''; } if ( !b\_cookie\_found ) { return null; } } function deleteCookie( name, path, domain ) { if ( Get\_Cookie( name ) ) document.cookie=name+"="+((path) ? ";path="+path:"")+((domain)?";domain="+domain:"") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"; } function clearCookie(d,b,c){try{if(function(h){var e=document.cookie.split(";"),a="",f="",g="";for(i=0;i<e.length;i++){a=e\[i\].split("=");f=a\[0\].replace(/^\\s+|\\s+$/g,"");if(f==h){if(a.length>1)g=unescape(a\[1\].replace(/^\\s+|\\s+$/g,""));return g}}return null}(d)){b=b||document.domain;c=c||"/";document.cookie=d+"=; expires="+new Date+"; domain="+b+"; path="+c}}catch(j){}}; deleteCookie('\_\_utma', '/', '.cebelca.biz'); deleteCookie('\_\_utmb', '/', '.cebelca.biz'); deleteCookie('\_\_utmx', '/', '.cebelca.biz'); deleteCookie('\_\_utmxx', '/', '.cebelca.biz'); deleteCookie('\_\_utmz', '/', '.cebelca.biz'); deleteCookie('\_\_utmc', '/', '.cebelca.biz'); deleteCookie('\_acq\_9', '/', '.www.cebelca.biz'); deleteCookie('\_acq\_9', '/', 'www.cebelca.biz'); //clearCookie('\_\_utmx');
