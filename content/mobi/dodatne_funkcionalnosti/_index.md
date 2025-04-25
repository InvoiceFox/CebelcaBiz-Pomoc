# Dodatne funkcionalnosti Čebelca MOBI

Ta stran pokriva dodatne funkcionalnosti programa Čebelca MOBI, ki vam lahko pomagajo pri učinkovitejši uporabi programa.

## Zbirka besedil

Zbirka besedil vam omogoča, da shranite pogosto uporabljena besedila in jih hitro vstavite v račune.

### Čemu je namenjena zbirka besedil?

Lahko se zgodi, da se vam določena besedila, ki jih morate vnašati v program, ponavljajo. Tak primer je pri besedilu nad ali pod tabelo, ko želite dodati neko klavzulo, ki glede na različne račune ni vedno ista, se pa pri posameznih računih ponavlja.

### Kako omogočiti zbirko besedil

Pojdite na Upravljanje > Možnosti. Tam obkljukajte **Omogoči zbirko besedil**. Shranite nastavitve spodaj in izstopite iz Upravljanja ter se vrnite nazaj in zgoraj boste opazili nov zavihek **Besedila**.

### Dodajanje besedila

Pritisnete **Nov vnos** in vnesete klavzulo. Dodelite ji ime (identifikator), to je skupino besed, ki čim bolje opiše besedilo in po katerem boste besedilo lahko našli in priklicali. Vnesite še **Vsebino** in pritisnite **Dodaj**.

### Urejanje in brisanje besedil

Uporabite tipki **Uredi** in **Izbriši**.

### V katera polja lahko vnašate besedila?

Besedila lahko vnašate v vsa večvrstična besedilna polja, npr. besedilo nad/pod tabelo pri računu.

### Kako vnesti besedilo iz zbirke besedil?

**Da začnete vnos**, vtipkajte **:** (dvopičje) in začnite tipkati besede ali del besede iz identifikatorja. Program vam bo na desni prikazoval predloge glede na vtipkano.

**Da se premikate med prikazanimi predlogi**, uporabite **Ctrl + smerni tipki (gor in dol)**.

**Da izberete besedilo**, uporabite **Ctrl + Enter**.

Postopek izbiranja prekinete s tipko **Esc** (escape na tipkovnici).

*Opomba: Ta način priklica z dvopičjem deluje v spletnem programu Čebelca BIZ. V Čebelca MOBI besedilo dodate tako, da pri računu, preden ga zaključite, pritisnete "..." in **Dodeli besedilo**, ter obkljukate željeno besedilo.*

### Napredna uporaba priklica (spletni program)

Če imate besedil več, lahko poskusite z naprednejšo uporabo priklica z dvopičjem v spletnem programu. In sicer lahko pri vnosu delov identifikatorja uporabljate dva posebna znaka:

**+** znak razširi izbor na za njim vneseneno besedilo

**\*** znak zoži izbor za njim vneseno besedilo

**Primeri:**

*   `epošta+obvestil+sporoči` vam bo prikazalo vsa besedila, ki v identifikatorju vsebujejo besedila "epošta" ali "obvestil" ali "sporoči".
*   `epošta*nujno` vam bo prikazalo le besedila, ki v identifikatorju vsebujejo "epošta" in besedilo "nujno".
*   `epošta+obvestil+sporoči*nujno*napak` bo prikazalo vsa besedila ki vsebujejo karkoli od "epošta", "obvestil" ali "sporoči", zožano na besedila, ki vsebujejo "nujno" in "napak".

## Uvoz artiklov

Na SD kartico telefona ali tablice posnamete datoteko z artikli. Potem v Čebelca MOBI kliknete **Davčna Blagajna > ... > Upravljanje > ... > Uvoz / Izvoz podatkov > Uvozi artikle**.

Do SD kartice lahko običajno dostopate tako, da telefon priklopite na računalnik (preko USB) in na telefonu omogočite USB povezavo za kopiranje datotek.

Datoteko lahko posnamete kamorkoli na notranji pomnilnik naprave, potem pa jo poiščete in izberete iz seznama.

Cene naj bodo neto (brez DDV) in na vsaj 4 decimalke. Vnos črtne kode je opcijski in se uporablja v primeru da program uporabljate s čitalcem črtne kode.

### Primer datoteke

```
name,tax,price,category,barcode
jack daniels,22,9.83606,žgano,32439423102
vodka,22,2.73973,žgano,32439423103
sendvič,8.5,4.10959,hrana,32439423104
hot-dog,8.5,2.73973,hrana,32439423105
pomarančni sok,22,1.6438,32439423106
coca-cola,22,1.6438,32439423107
jabolčni sok,22,1.6438,32439423108
```

Do **.csv** datoteke lahko pridete tako, da v Excelu ali Open Office Calc pripravite tabelo s prikazanimi stolpci. Potem datoteko shranite kot CSV. Zaradi dobre podpore za šumnike in več opcij pri delu s CSV priporočamo uporabo Open Office (je breplačen).

### Prenašanje artiklov na druge naprave

Če vnesete artikle na eni Android napravi, jih lahko prenesete na druge naprave. To storite tako, da jih izvozite na prvi napravi preko **Upravljanje > ... Uvoz/Izvoz podakov > Izvozi artikle na pomnilnik**.

Potem datoteko artikli.csv prenesete na drugo napravo (npr. preko dropbox ali preko emaila) in uvozite preko **Upravljanje > ... Uvoz/Izvoz podakov > Uvozi artikle iz pomnilnika** (več o uvozu zgoraj).

## Backup in povrnitev podatkov

### Kako naredite varnostno kopijo?

Na prvi strani spodaj kliknite **Nobena varnostna kopija še ni bila narejena** (oz. datum zadnje varnostne kopije) ter izberete **Poveži Dropbox**. Ko se povežete s svojim Dropbox dostopom spet kliknete na polje spodaj in izberete **Ustvari varnostno kopijo podatkov**.

### Kako shraniti datoteko iz dropbox na novo android napravo

Najbolj preprosto je, da si na novo Android napravo namestite Dropbox preko trgovine Play ter ga povežete s svojim Dropbox dostopom.

Potem greste na Files, tam najdete mapo **Apps** in v njej mapo **CebelcaMOBI**. V tej mapi boste našli datoteko **varnostna\_kopija\_(datum kopije).cebdb**. Pri tej datoteki na desni kliknete **tri pikicami** ter izberete **Export** ter **Save to device**. Datoteko vam običajno shrani v mapo **Prenosi / Download**.

### Kako povrnete podatke na novo napravo?

Ko imate bazo na mestu kliknete **Davčna blagajna > ... > Upravljanje > ... > Uvoz / izvoz podatkov > Prevzemi bazo iz Pomnilnika**.

Program vas vpraša za kodo, pišite nam na podporo in vam jo sporočimo. Koda je tu zato da si nebi kdo, ki ne razume kaj ukaz naredi prepisal vseh podatkov. Ko jo vnesete in potrdite je baza uvožena.

**POZOR:** Če to storite pri programu ki že vsebuje obstoječe podatke, bomo ti prepisani s podatki "backup" datoteke.

## Več podjetij na isti tablici

### Dodajanje novega uporabnika na Android tablico

Če želi več podjetij ali društev za Čebelca MOBI uporabljati isto Android tablico se na samem Androidu doda več uporabnikov. Več uporabnikov ne podpirajo vse naprave, zato to preverite pred nakupom. To običajno podpirajo tablice (telefoni manj) od Androida 4.2 naprej. Spodaj so predstavljeni vsi koraki. Postopek je preprost, večinoma le sledite postopku.

1. Kliknite na **Nastavitve**.
2. Kliknite **Uporabniki**, ter potem **Dodaj uporabnika ali ...**
3. V okencu, ki se pojavi izberite opcijo **Uporabnik**.
4. Kliknete **V redu**.
5. Kliknete **Nastavi zdaj**.
6. Sledite korakom in klikate puščico desno, vpišete Google email in geslo drugega uporabnika.
7. Lahko preskočite.
8. Prispete na namizje novega uporabnika. Tu ponovno namestite Čebelco MOBI (Če je še ni) in vsak Android uporabnik / podjetje bo imel čisto svoje podatke v Čebelci MOBI.

### Kako zaklenete dostop do uporabnika

Če želite omejiti dostop do aplikacije, ali na splošno ali pri več uporabnikih na isti napravi sledite naslednjim korakom.

1. Greste na Android **Nastavitve**, kjer pod **NAPRAVA** kliknete **Zaklenjen zaslon**. Na desni kliknete **Zaklepanje zaslona**
2. Izberete enega od načinov zaklepanja.

## Uporaba Čebelca MOBI s Čebelca Skladiščem

### Artikli s sestavo

#### Nabavni artikli

Nabavni artikli so artikli, ki jih nabavljate in za katere se vodi zaloga v skladišču. **Npr. Kava**.

* Dodate artikel Kava
* Ceno lahko vnesete 0, če ne bo veleprodaje s tem artiklom
* Enota je **kg**
* Pri polju **Prodajni izdelek** izberete Ne.

Ko delate nabavo, vnesete koliko kg tega artikla ste nabavili. Zaloga Kave se vodi pri tem artiklu.

#### Prodajni artikli

Dodate pa tudi prodajne artikle npr. **Kratka kava**. Prodajni artikli, se tudi prenesejo na Čebelca MOBI. Ko pritisnete tipko _Uvoz/Izvoz podakov > Čebelca: pridobi artikle_.

* Dodate artikel Kratka Kava
* Enota je **kos**
* Pri polju **Prodajni izdelek** izberete Da.

Ko je artikel dodan desno pri artiklu Kratka Kava kliknete **Sestava**. Odpre se obrazec kjer vnesete recept za kratko kavo.

**Opomba: trenutno, preden začnete dodajati sestavo, osvežite stran Artikli (F5), če ste ravno dodajali artikle.**

* Pod artikel izberete Kava
* Opis pustite prazen
* Količino vnesete npr. 0.075 (koliko kg kave se porabi za eno kratko kavo)
* Kliknete Dodaj

Artikel je lahko sestavljen tudi iz večih artiklov. Npr Kava z mlekom ima lahko za sestavo kavo, mleko in sladkor.

### Odpis zaloge preko MOBI

#### Dnevna prodaja v skladišče

Ko v mobi na koncu dneva naredite dnevni zaključek še pritisnete **Dnevna prod. v skladišče**. Tipko najdete na _Davčna blagajna > ... > Upravljanje > ... > Uvoz izvoz podatkov > Dnevna prod. v skladišče_. To naredi dobavnico v spletnem skladišču. Ta dobavnica odpiše zalogo za tisti dan.

Artikli, ki imajo sestavo, se ne bodo odpisali sami, ampak se bodo odpisali njihovi sestavni deli. (npr **Kratka kava** bo odpisala **0.075 kg** artikla **Kava**)

#### Partner pri odpisih na Mobi

Če pod Partnerji dodate partnerja z oznako vašega prostora in blagajne na mobilni napravi. Npr. Če je oznaka prostora P1 in oznaka blagajne B1, dodate partnerja z nazivom **Blagajna: P1-B1**.

V tem primeru bo, ko kliknete **Dnevna prod. v skladišče** program avtomatsko izbral partnerja glede na vašo mobi blagajno.

## Izvoz podatkov za računovodstvo

### Izvoz poročil na Dropbox

V Čebelci MOBI kliknete Upravljanje > POROČILA > MESECI (spodaj) > dolgi pritisk na izbrani mesec > izvoz poročil na Dropbox.

Ukaz **izvozi mesečne račune** vam nudi bolj podroben pregled nad prodajo. Najdete ga pri **Upravljanje > ... > Uvoz / izvoz podatkov**. In sicer se v vašo Dropbox mapo (Apps/CebelcaMOBI/) izvozi 6 **.csv** datotek. Ena datoteka prikazuje prodajo po dnevih, druga vse račune, tretja vse vsebine računov, prodajo po artiklih, skupinah artiklov in prodajalcih.

CSV datoteke so preproste excel datoteke. Za odpiranje močno priporočamo brezplačen Open Office (ali Libre Office) Calc. Kar je brezplačna odprtokodna alternativa Excel-u in ima izvrstna orodja za odpiranje teh datotek. Tudi Excel odpira .csv datoteke, vendar so včasih težave s šumniki, ali pretvarjanjem določenih števil v datume (npr. 9.5 v 9.maj), odvisno od verzije, jezikovnih nastavitev in načina odpiranja.
