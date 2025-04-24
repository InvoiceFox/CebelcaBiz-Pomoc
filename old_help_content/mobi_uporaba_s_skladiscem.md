    Program za pisanje računov, za podjetja in NVO - Čebelca BIZ                        

*   [Čebelca Računi](/)
*   [Skladišče](/skladisce/)
*   [Potni Nalogi](/potni-nalogi/)
*    · 
*   [Čebelca MOBI](/mobi/)
*    · 
*   [Prijava za uporabnike](/manage/sign-in.html)

 

Uporaba Čebelca MOBI v povezavi s Čebelca Skladičem (BIZ)
---------------------------------------------------------

  

*   [Artikli s sestavo](#einv)
    *   Nabavni artikli
    *   Prodajni artikli
*   [Odpis zaloge preko Mobi](#einv)
    *   Dnevna prodaja v skladišče
    *   Partner pri odpisih na Mobi

_več navodil_

*   [Osnovna stran pomoči](https://www.cebelca.biz/pomoc.html)
*   [Nastavitve in uporaba programa](https://www.cebelca.biz/pomoc-davcne-blagajne-mobi.html)
*   [Uvoz namenskega digitalnega potrdila v Čebelca MOBI](https://www.cebelca.biz/pomoc-davcne-blagajne-mobi-potrdilo.html)

### Artikli s sestavo

#### Nabavni artikli

Nabavni artikli so artikli, ki jih nabavljate in za katere se vodi zaloga v skladišču. **Npr. Kava**.

*   Dodate artikel Kava
*   Ceno lahko vnesete 0, če ne bo veleprodaje s tem artiklom
*   Enota je **kg**
*   Pri polju **Prodajni izdelek** izberete Ne.

Ko delate nabavo, vnesete koliko kg tega artikla ste nabavili. Zaloga Kave se vodi pri tem artiklu.

#### Prodajni artikli

Dodate pa tudi prodajne artikle npr. **Kratka kava**. Prodajni artikli, se tudi prenesejo na Čebelca MOBI. Ko pritisnete tipko _Uvoz/Izvoz podakov > Čebelca: pridobi artikle_.

*   Dodate artikel Kratka Kava
*   Enota je **kos**
*   Pri polju **Prodajni izdelek** izberete De.

Ko je artikel dodan desno pri artiklu Kratka Kava kliknete **Sestava**. Odpre se obrazec kjer vnesete recept za kratko kavo.

**Opomba: trenutno, preden začnete dodajati sestavo, osvežite stran Artikli (F5), če ste ravno dodajali artikle.**

*   Pod artikel izberete Kava
*   Opis pustite prazen
*   Količino vnesete npr. 0.075 (koliko kg kave se porabi za eno kratko kavo)
*   Kliknete Dodaj

Artikel je lahko sestavljen tudi iz večih artiklov. Npr Kava z mlekom ima lahko za sestavo kavo, mleko in sladkor.

### Odpis zaloge preko MOBI

#### Dnevna prodaja v skladišče

Ko v mobi na koncu dneva naredite dnevni zaključek še pritisnete **Dnevna prod. v skladišče**. Tipko najdete na _Davčna blagajna > ... > Upravljanje > ... > Uvoz izvoz podatkov > Dnevna prod. v skladišče_. To naredi dobavnico v spletnem skladišču. Ta dobavnica odpiše zalogo za tisti dan.

Artikli, ki imajo sestavo, se ne bodo odpisali sami, ampak se bodo odpisali njihovi sestavni deli. (npr **Kratka kava** bo odpisala **0.075 kg** artikla **Kava**)

#### Partner pri odpisih na Mobi

Če pod Partnerji dodate partnerja z oznako vašega prostora in blagajne na mobilni napravi. Npr. Če je oznaka prostora P1 in oznaka blagajne B1, dodate partnerja z nazivom **Blagajna: P1-B1**.

V tem primeru bo, ko kliknete **Dnevna prod. v skladišče** program avtomatsko izbral partnerja glede na vašo mobi blagajno.

  

* * *

Če imate dodatna vprašanja, [nam pišite](contact-si.html) ali uporabite tipko desno spodaj.

Če imate dodatna vprašanja, nam pišite na **[\[email protected\]](/cdn-cgi/l/email-protection)** .

  

  

[**« na osnovno stran**](/)

[Prijava](/manage/sign-in.html) | [Kontakt](/contact-si.html) | [Pogosta vprašanja](/faq-si.html) | [Pogoji uporabe](/tos-si.html) | [Zasebnost](/tos-si.html#priv)

**REFAKTOR d.o.o.**  
Velika Loka 21, 1290 Grosuplje, Slovenija  
  
© 2009-2015, Vse pravice pridržane.

[Blog](https://cebelca-biz.blogspot.com/) | [Facebook](https://www.facebook.com/cebelcabiz/) | [Twitter](https://twitter.com/cebelcabiz)

Na teh straneh ne uporabljamo piškotkov. Razen sejnega piškotka, ko se prijavite v program, čemur so le-ti namenjeni.

var \_UsrJoyP = {u: ("https:"==document.location.protocol?"https":"http")+"://www.usrjoy.com", 'doFAQ': window.doFAQHere || false, 'doWorklog': window.doWorklogHere || false}; document.write(unescape("%3Cscript src='"+\_UsrJoyP.u+"/tstatic/41/5.js' type='text/javascript'%3E%3C/script%3E"+ "%3Clink rel='stylesheet' href='"+\_UsrJoyP.u+"/tstatic/41/4.css' type='text/css'%3E%3C/link%3E")); function deleteCookie1(c\_name) { document.cookie = encodeURIComponent(c\_name) + "=deleted; expires=" + new Date(0).toUTCString(); } function Get\_Cookie( check\_name ) { // first we'll split this cookie up into name/value pairs // note: document.cookie only returns name=value, not the other components var a\_all\_cookies = document.cookie.split( ';' ); var a\_temp\_cookie = ''; var cookie\_name = ''; var cookie\_value = ''; var b\_cookie\_found = false; // set boolean t/f default f for ( i = 0; i < a\_all\_cookies.length; i++ ) { // now we'll split apart each name=value pair a\_temp\_cookie = a\_all\_cookies\[i\].split( '=' ); // and trim left/right whitespace while we're at it cookie\_name = a\_temp\_cookie\[0\].replace(/^\\s+|\\s+$/g, ''); // if the extracted name matches passed check\_name if ( cookie\_name == check\_name ) { b\_cookie\_found = true; // we need to handle case where cookie has no value but exists (no = sign, that is): if ( a\_temp\_cookie.length > 1 ) { cookie\_value = unescape( a\_temp\_cookie\[1\].replace(/^\\s+|\\s+$/g, '') ); } // note that in cases where cookie is initialized but no value, null is returned return cookie\_value; break; } a\_temp\_cookie = null; cookie\_name = ''; } if ( !b\_cookie\_found ) { return null; } } function deleteCookie( name, path, domain ) { if ( Get\_Cookie( name ) ) document.cookie=name+"="+((path) ? ";path="+path:"")+((domain)?";domain="+domain:"") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"; } function clearCookie(d,b,c){try{if(function(h){var e=document.cookie.split(";"),a="",f="",g="";for(i=0;i<e.length;i++){a=e\[i\].split("=");f=a\[0\].replace(/^\\s+|\\s+$/g,"");if(f==h){if(a.length>1)g=unescape(a\[1\].replace(/^\\s+|\\s+$/g,""));return g}}return null}(d)){b=b||document.domain;c=c||"/";document.cookie=d+"=; expires="+new Date+"; domain="+b+"; path="+c}}catch(j){}}; deleteCookie('\_\_utma', '/', '.cebelca.biz'); deleteCookie('\_\_utmb', '/', '.cebelca.biz'); deleteCookie('\_\_utmx', '/', '.cebelca.biz'); deleteCookie('\_\_utmxx', '/', '.cebelca.biz'); deleteCookie('\_\_utmz', '/', '.cebelca.biz'); deleteCookie('\_\_utmc', '/', '.cebelca.biz'); deleteCookie('\_acq\_9', '/', '.www.cebelca.biz'); deleteCookie('\_acq\_9', '/', 'www.cebelca.biz'); //clearCookie('\_\_utmx');
