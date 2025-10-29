# Nove DDV Evidence (KIR/KPR)

## Uvod

Od **01.07.2025** dalje morajo **vsi zavezanci za DDV** oddajati tako imenovane DDV ali KIR/KPR evidence.


<!-- ## Kazalo

* [Nastavitve in vnos podatkov](#nastavitve-in-vnos-podatkov)
  * [Kontni načrt](#kontni-načrt)
  * [Konti za ne-računovodje](#konti-za-ne-računovodje)

-->

## O evidencah

### Kdo mora oddajati evidence

Evidence morate oddajati, če ste:

* Zavezanci za DDV
* Atipični zavezanci za DDV
* Sobodajalci - so običajno tudi atipični zavezanci, saj prejmejo račun za provizijo od Booking in AirBnB.

### Kdaj morate oddajati evidence

Evicence morate oddajati na 1 ali 3 mesece. Odvisno od tega za kakšno obdobje ste zavezani oddaji DDV-ja. Evidence morate oddati tudi če niste izdali ali prejeli nobenega računa v obdobju (ali nobenega računa v tujino za atipične zavezance), torej tudi če ni zapisov, morate oddati zip z "praznima" XML datotekama.

### Kaj vsebujejo evidence

Pri običajnih DDV zavezancih evidence vsebujejo podatke o vsakem prejetem in izdanem računu posebej. En račun, ena vrstica.

Pri atipičnih zavezancih morajo evidence izdati le prejete in izdane račune iz in v tujino. Bodite pozorni saj morajo v določenih primerih isti računi biti v obeh evidencah.

> **Vprašanje:** Ali je potrebno poročati tudi račune izven EU?
>
> Tudi računi izven EU se poročajo, vendar na drugačen način kot tisti iz EU.

> **Vprašanje:** Ali je potrebno v evidence vnesti tudi račune, ki so vam jih izdali nezavezanci za DDV (brez DDV-ja)?
>
> Ne. Prejetih računov, ki so jih izdali nezavzanci za ddv (niso zavezanci po 94. členu ZDDV-1) ni potrebno vnašati v evidence.

### Evidence in Čebelca BIZ

Čebelca NI namenjena neposrednemu oddajanju podatkov na FURS. Že od nekdaj je program za podjetja z zunanjim računovodstvom in tudi smo mnenja, da je bolje da vam podjetnikom pri tem pomaga računovodstvo, saj stvari niso vedno preproste. Izjemoma
smo dodali orodje za kreiranje in oddajo evidec, saj se je izkazalo, da obstaja veliko atipičnih zavezancev, ki so sedaj sami oddajali DDV-O in nimajo dovolj prometa za računovodjo, ter nameravajo tudi te evidence oddati sami.

Pri tem svetujemo **previdnost, posvetujte se s kolegi iz iste branže in računovodji**, da boste vsebinsko pravilno oddali evidence. Program Čebelca vam lahko pomaga izpolniti evidence glede na podatke, ki jih ima, a morate sami vedeti kateri stolpci so 
pravi in po možnosti popraviti podatke. Čebelca nima vseh potrebnih informacij glede računov, da bi podatke predlagala pravilno za vsako situacijo.

Orodje za **DDV evidence** smo dodali v naš Računi modul paket (tako brezplačni Mini kot Plus), a ni aktiviran že vnaprej, tako da nam javite, če želite aktivacijo. Zavihek najdete desno od zavihka Statistika. Orodje je **brezplačno**.

### Oddaja evidenc

Čebelca BIZ vam iz vnešenih podatkov naredi **ZIP** paket z dvema XML datotekama, ki jih oddate na vaših **eDavkih**.

## Delo z evidencami

### 1. Dodaj evidenco

Zavihek **DDV Evidence** najdete desno od zavihka **Statistika**. Če ga nimate in ga potrebujete nam javite na podporo in vam bomo evidence aktivirali.

Na zavihku najdete kratka navodila in tipko **Dodaj evidenco**. Kliknete jo in vpišete datum pričetka in konca obdobja, za katerega boste vnašali evidenco. Običajno je to od prvega do zadnjega v mesecu ali pa v tromesečju. 
Odvisno od tega, ali ste **mesečni ali tro-mesečni** DDV zavezanec.

### 2. Uredi KIR

Tu načeloma vneste podatke o izdanih računih. Če ste atipični poročate o izdanih računih v EU.

Če ste običajni DDV zavezanec in želite poročati o računih, ki ste jih izdali preko Čebelce, lahko pritisnete **generiraj iz izd. računov**, a če ste običajni DDV zavezanec, vam priporočamo,
da uporabljate računovodski servis.

### 3. Uredi KPR

Tu vnesite podatke o prejetih računih. Če ste atipični zavezanec, potem prejetih iz EU.

Če ste običajni zavezanec, tu poročate o vseh prejetih računih. Spet lahko uporabite **generiraj iz prej. računov**. A stolpcev je veliko in sami morate poskrbeti da bodo pravilno izpolnjeni. Za običajnega DDV zavezanca priporočamo da vam to oddaja računovodski servis.

### 4. Prenesi ZIP

Ko ste pravilno izpolnili obdobje in KIR ter KPR del za to obdobje potem pritisnete tipko **Izvozi**. Prenesel se vam bo ZIP paket ki ga naložite na vaše eDavke.

Kot normalno se prijavite v eDavke. Kliknite Uvoz dokumenta in potem Uvoz evidenc. Izpolnite obrazec in naložite Zip datoteko ter kliknite tipko Uvoz evidenc. Napiše vam "Naloženo" in potem nujno kliknite Prikaži status, da vam pokaže morebitne napake!

### 5. Naloži na E-davke

Na edavkih se evidence oddajo pod menijem **Dokumenti > Uvoz > Uvoz evidenc**. Tam se izbere obdobje iz spustnega menija, izbere vrsto datoteke (**xml** ali json), klikne na gumb **Izbira zip datoteke**, se poišče shranjeno datoteko zip iz aplikacije cebelca.biz. 

Klikne na gumb **Uvoz Evidenc** in počaka nekaj sekund/minut da se spodaj osveži in prikaže status **PREVERJENO BREZ NAPAK**. V primeru napake vam izpiše vrstico z napako in ustrezno preverite. Lahko je napaka v formatu davčne številke (presledki,...) ali pa napačna oznaka države ali pa kaj drugega zato je potrebno preveriti. 

Edavki lahko javijo tudi določene očitne vsebinske napake (npr. neujemanje osnove in DDV-ja, oz. vnešeni zneski v nasprotujoče si stolpce), a če javi PREVERJENO BREZ NAPAK, še ne pomeni nujno, da ste vse zneske vnesli v prave stolpce glede navrsto računa ali posla.


## Vsebinski nasveti

Evidence morate oddati v svojem davčnem obdobju če ste imeli račune v tem obdobju ali ne. Tudi če niste prejeli ali izdali nobenih računov v obdobju, **morate oddati prazne evidence**.

### Atipični zavezanci

Načeloma morate v evidence vpisati le prejete in izdane račun v EU trg. Račune iz domačega trga, kjer niste DDV zavezanvci ne vnašate, a preverite pri svojem računovodju za vaš primer. Katere stolpce točno je treba izpolniti morate prav tako vedeti sami, če evidence urejate sami. 

Čebelca na primer ne more vedeti ali je neki prejeti račun običajen račun, za osnovna sredstva (KPR: P13), ali za npr. nepremičnine (KPR: P12). Oz. ali je nek izdani račun npr. Prodaja blaga na daljavo (KIR: P12), Prodaja blaga z montažo ali napeljavo (P13), storitev ali blago v tujino.

Bodite pozorni, da se pri atipičnih zavezancih isti računi **pogosto vnašajo v obe knjigi (KIR in KPR)**.

### Booking, AirBnB (atipični zavezanci)

Od Booking in AirBnB prejmete račun za provizijo. Vi izdate račun stranki normalno, a ker je storitev opravljena v Sloveniji, se to smatra domači račun, ki ga ne vnašate. 

Od agencij iz EU pa prejmete račun za provizijo, ki vam jo zaračunajo in te račune
za provizijo morate vnesti v evidence in oddati. Tu je posebnost to, da morate tak **račun za provizijo vnesti v KIR in v KPR evidenco**!

#### Booking

Od Booking običajno dobite en račun za provizijo za cel mesec. Tako da za en mesec vnesete eno vrstico med prejete račune (KPR), pa tudi eno vrstico v izdane račune (KIR). 

Pri KPR:

 * Vnesete ODBDOBJE, P2, P3, P4, P5, P6, P7, P7DS
 * V polje **P11** vnesete **osnovo** provizije
 * V polje **P18** vnesete **znesek DDV** provizije
	
Pri KIR:

 * Vnesete ODBDOBJE, P2, P3, P4, P5, P6, P7, P7DS
 * V polje **P18** vnesete **znesek DDV** provizije
 * osnove v KIR ne vnašate

#### AirBnB

Tudi pri AirBnB prejmete račun za provizijo, ki ga morate vnesti v evidence. A pri njih običajno dobite en račun za vsako rezervacijo posebej. **Izpolnete iste stolpce, a je ena vrstica za vsako rezervacijo**, ne za cel mesec.

Bodite tudi pozorni ali prejeti račun izhaja iz EU ali npr. ZDA? To lahko vpliva na to kako morate vnesti račun v evidence. Primer zgoraj je za EU.

#### DDV zavezanci

Če ste DDV zavezanec, je na splošno priporočljivo, da uporabljate storitve računovodskega servisa. Knjiženje DDV-ja je vsebinsko lahko zelo zapleteno in napake imajo lahko posledice. Tudi če osnovno knjiženje ni zapleteno se lahko
zaplete pri različnih robnih pogojih, posebnih situacijah. Enako je pri oddaji tega poročila.

Na spletni strani FURS-a je objavljen zip s primeri izpoljevanja evidenc, ki vključuje tudi primere airbnb & booking.

[Kratka_vprasanja_in_odgovori_Evidenca_obracunanega_DDV_in_Evidenca_odbitka_DDV.doc](https://www.fu.gov.si/fileadmin/Internet/Davki_in_druge_dajatve/Podrocja/Davek_na_dodano_vrednost/Opis/Kratka_vprasanja_in_odgovori_Evidenca_obracunanega_DDV_in_Evidenca_odbitka_DDV.doc)
  
  (54 strani)

[Primeri_izpolnjevanja_evidenc_obracunanega_DDV_in_odbitka_DDV.zip](https://www.fu.gov.si/fileadmin/Internet/Davki_in_druge_dajatve/Podrocja/Davek_na_dodano_vrednost/Opis/Primeri_izpolnjevanja_evidenc_obracunanega_DDV_in_odbitka_DDV.zip)
  
  (vsebuje prikazani izpolnjeni KIR in KPR evidenci (tabeli) kot sliki, in v .doc dokumentu kar 29 primerov situacij za KIR in 29 za KPR)

#### Dodatna opozorila

Če pravilno oddate evidence vsaj 3 dni pred predvidenim datumom oddaje v obdobju, bo iz teh podatkov avtomatsko izpolnjen in vložen še DDV-O obrazec.

Zelo pozorni morate biti pri poročanju računov za pretekla že zaključena obdobja, ker je treba pravilno vnesti polja, da gre to za samoprijavo (na posamezni postavki oz. računu) ali pa morda celo samo za obresti in je to potrebno potem pravilno razvrstiti v ustrezne stolpce in tudi z ustreznimi oznakami.

**Pozor:** v primeru **dobav blaga in storitev v EU** se mora DDV-O obrazec oddati do 20. v mesecu (ali pa tudi kakšen dan prej, če pade 20. v mesecu na soboto ali nedeljo oz. praznik), kar pa posledično pomeni, da je treba vsaj 3 oz. 4 dni pred tem datumom oddati evidence, da bo obrazec vložen, **drugače je potrebno obrazec DDV-O oddati ročno**.

V primeru da se oddajo samo evidence in obrazec ni kreiran avtomatsko, je potrebno obrazec DDV-O oddati ročno v rokih določenih z zakonom. (20 ali zadnji dan v mesecu).

**Pozor:** tisti, ki imajo dobave blaga ali storitev v EU morajo oddati tudi obrazec VIES-KP (RP-O) Rekapitulacijsko poročilo, prav tako do 20. v mesecu. **Ta obrazec se zaenkrat ne kreira avtomatsko in ga vedno potrebno oddajati ročno do 20. v mesecu.**
