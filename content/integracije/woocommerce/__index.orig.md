# Dodatek za WooCommerce

## Kaj je Čebelca BIZ dodatek za Woocommerce?

Čebelca BIZ WooCommerce dodatek je WordPress "vtičnik" za e-trgovino, ki omogoča avtomatsko dodajanje kupcev, ustvarjanje računov, dodajanje plačil in kreiranje dobavnic glede na status naročil v spletni trgovini.

Dodatek je na voljo brezplačno na spletni strani Cebelca BIZ WooCommerce na Github-u in je odprtokodni projekt, uporabniki pa so vabljeni, da svoje izboljšave in popravke objavijo na Github-u.


## Kje dobite dodatek?

Dodatek najdete na Github strani: [CebelcaBIZ-WooCommerce](https://github.com/InvoiceFox/CebelcaBIZ-WooCommerce)

Zip paket dodatka, ki ga lahko neposredno namestite na vaš woocommerce, pridobite s klikom na tipko **Code** in potem **Download ZIP**.

***Dodatek je prosto dostopen in je na voljo "kot je". Za namestitev in 
morebitno prilagoditev v vašo spletno trgovino morate poskrbeti
sami. V večini primerov pa deluje brez posebnega prilagajanja.***

## Namestitev

V vašem Wordpres upravljanju obiščete stran **Vtičniki** > **Dodaj nov**. Ter levo zgoraj kliknete **Naloži vtičnik**. Iz svojega računalnika izberete zgoraj preneseno ZIP datoteko in **naloži**.

![](woo_1.png)

Potem ga poiščete na **Vtičniki** > **Nameščeni vtičniki** in pri dodatku **Čebelca BIZ** kliknete v **omogoči**. Dodatek je tako nameščen.

## Nastavitve dodatka

V menuju na levi pojdite na **WooCommerce** > **Nastavitve** > **Integracija** > **Čebelca BIZ**. 

Prva stvar, ki jo vnesete je **API Ključ**. API ključ dobite na strani Čebelca > Nastavitve > Dostop. Na dnu strani aktivirate API dostop in pokaže se vam API ključ.

Naslednjo rubriko nastavitev **Detajli delovanja** lahko zaenkrat spustite.

![](woo_2.png)

Pojdite nižje do rubrike **Kreiranje računov**. Računi se ustvarijo avtomatsko, ko naročilo dobi določen status. To, ob katerem statusu se račun ustvari in kaj točno se zgodi, nastavljate na tem delu.

Na voljo imate 3 statuse:

* Zadržano
* V obdelavi
* Zaključeno

Ustvari se lahko samo osnutek, račun se lahko tudi izda (dobi številko), računu se lahko označi način plačila, ustvari se lahko dobavnica v skladišču in pri statusu zaključeno, se lahko kupcu pošlje PDF izdanega računa na e-pošto. Pošlje jo vaš WooCommerce sam, PDF pa se potem, ko je račun ustvaril in izdal, prenese iz Čebelce BIZ.

**Za začetek** je dobra nastavitev, da pri spremembi na status **Zaključeno** izberete, naj se ustvari osnutek računa. Osnutek lahko potem v Čebelci izdate, davčno potrdite ali pa pobrišete, če npr. še testirate.

![](woo_3.png)

Kasneje lahko nastavite, da se več ali vsi koraki zgodijo avtomatsko, a takrat bodite prepričani, da imate dobro nastavljeno trgovino ter dodatek. Preverite, da je davek v spletni trgovini pravilno nastavljen, da so stroški dostave pravilno nastavljeni in da se račun pravilno prenese. Še posebej je to pomembno, če nastavite avtomatsko **davčno potrjevanje računov** (davčno blagajno) v Čebelci.

## Kako delujejo statusi?

Načeloma se da to nastavljati, a v osnovi je tako, da če je način plačila **Po povzetju**, naročilo samo pridobi status **V obdelavi**. 

Če je način plačila **bančno nakazilo**, kar se včasih smatra kot *plačilo po predračunu*, pa naročilo samo pridobi status **Zadržano**. Dodatek omogoča, da lahko v tem primeru npr. Čebelca sama naredi predračun. 

Večina uporabnikov si dodatek nastavi tako, da se račun ustvari, kasneje pa tudi izda in pošlje na e-pošto, ob statusu **Zaključeno**.

## Davčna blagajna

Vse račune, **ki niso plačani z direktnim nakazilom na vaš bančni račun ali s PayPal**, je potrebno davčno potrditi. To vam omogoča Čebelca. Če WooCoomerce dodatek kreira le osnutke, lahko potem račun pregledate, v čebelci izdate in, če imate stvari tako nastavljeno, tudi davčno potrdite v sami Čebelci.

Lahko pa nastavite tudi avtomatsko davčno potrjevanje računov iz samega dodatka. V tem primeru morate izpolniti rubriko **Davčna blagajna**.

![](woo_4.png)


## Pred pričetkom

### Testiranje

Ko uredite nastavite morate dodatek preizkusiti. Če ste imeli vklopljen izklopite davčno potrjevanje, naredite naročilo v spletni trgovini in potem
spreminjate status naročil in spremljate kaj se dogaja pri sporočilih naročila in v Čebelci. 

V Čebelci se bo, če ste tako nastavili npr. naredil predračun ali osnutek računa. Te testne predračune ali osnutke lahko potem v Čebelci brez težav pobrišete.

**POZOR:** Če se račun **davčno potrdi** se podatki že pošljejo na **FURS strežnik** in računa se ne da več brisati. Tako da testiranje z davčnim
potrjevanjem odsvetujemo. 

Če res morate še tehnično da testirati tudi davčno potrjevanje, a je zapleteno in morate točno vedeti kaj delate. V tem primeru
nas kontaktirajte.

Bolje je, da vsebinsko vse temeljito stestrirate brez potrjevanja, z osnutki (še neizdanimi računi) ali z kreiranjem navadnih računov (ki dobijo številko npr
25-0001), tudi te lahko pobrišete.

### Bodite pozorni na DDV

Pozorni bodite na pravilno nastavitev **DDV** pri izdelkih v spletni trgovini. Ali ste zavezanci za DDV ali ne, ali se prodaja v Sloveniji ali EU oz. širše.
Ali podjetjem ali fizičnim osebam. 

DDV je lahko tudi odvisen od države kupca. **O tem se posvetujte z računovodstvom**. WooCommerce omogoča
velik nabor nastavitev okoli tega, a stvari morate pravilno nastaviti. 

V vsakem primeru, Čebelca bo račun naredila **tako, kot bo dobila podatke** iz WooCommerce.

### Prvi pravi računi

Močno priporočamo, da najprej nekaj časa tudi ko delat kreirate OSNUTKE, tako da jih podjetje v Čebelci **pregleda in šele nato davčno potrdi**. Ko se 
vidi da je vse v redu natavljeno pa lahko avtomatizirate stvari dalje, vklopite tudi avtomatsko davčno potrjevanje in avtomatsko pošiljanje na email
stranki.

Imeli smo primere, ko je uporabnik v štartu napačno nastavil DDV in tako kreiral in **davčno potrdil** več 100 računov. Vse to stornirati na FURS in izdati ponovno je zelo zahteven postopek. Tega si ne želite.

## Računi po e-pošti

Plugin vam nudi tudi opcijo da PDF predračuna ali računa prenese na vaš strežnik in ga potem pripne e-poštnem sporočilu, ki ga pošlje vaš WooCommerce ob določenem statusu. Npr. ob novem naročilu (status zadržano ali v obdelavi) ali bo zaključenem naročilu. S tem se izognete dodatnim emailom in email pride
z računom pride k stranki iz vaše domene, kar je bolje.

Je pa treba pravilno nastaviti sam Čebelca Plugin, WooCommerce in tudi strežnik (PHP).

### Nastavitve dodatka

Pri vsakem statusus v nastavitvah dodatka Čebelca BIZ imate tudi opcijo kjer se dokument pošlje po e-pošti. Na nastvitvah plugina pri nastavitvi akcij 
najdete npr. "**Ustvari predračun, pošlji po e-pošti**", ali "Ustvari račun, izdaj račun, označi plačilo, pošlji po e-pošti".

Če se račun še ne izda, je še osnutek (nima številke), ga nima smisla pošiljati stranki.

### Nastavitve emailov na WooCommerce

Če WooCommerce sploh ne bo poslal emaila ob določenem statusu, potem se seveda tudi dokument iz Čebelce nima kam pripeti. Na **WooCommerce > Nastavitve > Epošta**
najdete seznam tipov sporočil, ki jih lahko pošilja WooCommerce in tam obkljukate ob katerih statusih želite sporočilo poslati.

### Nastavitve PHP

Če se email pošlje in datoteka ne pripne ali je priponka neveljaven PDF preverite če se PDF-ji prenašajo v mapo wp-content/invoices. Če ne
preverite dnevnik dogodkov, da vidite kakšno napako javi. Npr. težava je lahko da imate **allow_url_fopen** onemogočeno.

Če se email sploh ne pošlje preverite ali vaš server dovoli uporabo PHP funkcije **mail()**. S klicem na phpinfo(); dobite seznam o disable_functions. 
Ta funkcija se vedno bolj pogosto onemogoči zaradi varnostnih razlogov (ker jo izkoriščajo razne skripte za pošiljanje nezaželjene pošte).

Če je **mail()** onemogočen (disabled), pa tudi drugače priporočamo da si namestite brezplačen plugin **WP Mail SMTP**, ki vso e-pošto iz WooCommerce pošilja na bolj robusten in varen način preko vašega SMTP strežnika.

### Cebelcabiz email logging

Naredili smo preprosti dodatni plugin, ki vam lahko pomaga najti napake z emaili in priponkami v mailih. Le namestite si ga in potem obiščete **Orodja > Cebelcabiz Email Logging** in videli boste vso pošto ki se je poslal iz vašega WooCommerce in tudi priponke ter njihovo velikost. Tako boste videli
ali se je npr. e-pošta ob statusu zaključeno res poslala in ali je vsebovala priponko z primerno velikostjo (nad 20kB npr.).

## Uporaba s skladiščem

Če v Čebelci BIZ vodite tudi zalogo z modulom Skladišče, boste želeli, da račun, ki se kreira preko WooCommerce, lahko tudi odpiše
zalogo. V tem primeru bodite pozorni na naslednje stvari.

* Izdelki v WooCommerce morajo imeti vnešen SKU
* SKU mora biti enak, kot je šifra artikla v Čebelca Skladišču

To je potrebno zato, da Čebelca najde pravi artikel in ga odpiše.

Skladiščni dokument (dobavnico) lahko ustvarite sami ročno s klikom na računu v Čebelca BIZ, potem pa uporabite tipko **V sklad. dok.** Takšen dokument potem zmanjša zalogo v izbranem skladišču. 
Lahko pa tudi nastavite plugin tako, da se to zgodi avtomatsko ob spremembi statusa npr. na **Zaključeno**.
