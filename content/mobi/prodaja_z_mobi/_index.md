# Prodaja s Čebelca MOBI

## Izberite prostor in prodajalca

Na prvi strani programa (na sliki spodaj) izberite pravilni prostor, če že ni izbran, pravega prodajalca (sebe) in pritisnete tipko Davčna blagajna.

* tipka za izbiro prostora: Na sliki tipka P1-B1 (oznaka prostora in blagajne) levo od tipke Uredi
* izbirno polje za prodajalca: Na sliki z napisom PRODAJALEC1, nad tipko Davčna blagajna

## Povežite tiskalnik

Ko ste kliknili na modro tipko Davčna blagajna kliknite na menujsko tipko in potem izberite Poveži tiskalnik. Če je bil tiskalnik že seznanjen z napravo, ga le izberete iz seznama. Povezovanje običajno traja nekaj sekund, za tem pa program sporoči ali je bila povezava uspešno vpostavljena.

Če se povezava ne vpostavi, lahko izklopite in ponovno vklopite tiskalnik, ter poskusite še enkrat.

	menujska tipka: 3 pikice desno zgoraj (kot na sliki) ali pa konkretna tipka na samem ohišju telefona. Če v programu ni tipke s 3 pikicami potem ima vaša android naprava konkretno tipko na ohišju.

## Izdelava računov / prodaja

### Dodajte izdelke na račun

S pritiskom na izdelke jih dodate na račun. En pritisk doda en kos.

Če želite dodati decimalno količino (npr 1.5 kg), ali večjo količino uporabite dolgi pritisk. Ta vam odpre okence za številski vnos količine, popusta, pa tudi poljubne cene ali dodatnega besedila pri nazivu artikla.

	dolgi pritisk: dolgi pritisk omogoča izbedno dodatnih akcij. Dosežete ga s pritiskom za cca. 2 sekundi. Ob tem se vam bo pokazalo okno za potrditev akcije (npr. "Ali ste prepričani, da želite odstraniti izdelek?"), okno z izbiro več akcij ali za vnos parametrov.

### Preglejte račun

Na naslednjem zavihku lahko vidite artikle oz. storitve na računu. Z dolgim pritiskom jih lahko odstranite iz računa.

### Vnesite plačilo in zaključite račun

Na tretjem zavihku izberete način plačila in natisnete ter zaključite račun. Ko pritisnete tipko za zaključitev, se račun tudi davčno potrdi. To pomeni da se izračunata ZOI in QR koda, podatki pa se pošljejo na FURS, ki odgovori z EOR kodo. Vse tri kode se natisnejo na račun.

Dolgi pritisk vam omogoča vnos plačanega zneska in program potem prikaže znesek vračila. Račun je lahko plačan z več načini hkrati. Načine plačila se ureja v Upravljanju.

    izbira načina plačila: klik pomeni da je bil račun plačan v celoti. Dolgi pritisk omogoča da vnesete znesek plačila in vidite koliko je treba vrniti.
    zaključi in natisni: zaključi račun, ga pošlje na FURS in natisne na tiskalnik

## Posebni primeri

### Stornirajte račun (dobropis)

Račun stornirate tako, da naredite dobropis. To pomeni da račun ostane, doda pa se dodatni dokument (dobropis), ki je račun v minus.

Dobropis ustvarite tako, da na Upravljanje na določenem računu izvedete dolgi pritisk. Pojavi se am menu, kjer izberete V dobropis / storno

To vam ustvari nov dokument NEIZDANO, ki ima vsebino enako kot račun s količinami v minus. Ta račun morate zaključiti in potrditi na FURS.

To storite z dolgim pritiskom na NEIZDANO, v menuju, ki se pokaže pa izberete Zaključi in potrdi na FURS.

### Potrjevanje računa na FURS ne uspe

Če skušate zaključiti in natisniti račun in potrjevanje na FURS ne uspe (npr. FURS ali internet trenutno ne deluje) lahko račun izdate brez EOR.

To storite z dolgim pritiskom na tipko Zaključi in natisni. Takšen račun vsebije ZOI in QR kodo, ne vsebuje pa EOR kode.

Račun brez EOR kode, morate naknadno potrditi na FURS v dveh dneh!

Ko FURS ali internet spet deluje, račun izdan brez EOR potrdite na FURS.

Takšen račun bo rdeče barve na seznamu računov. Na račun izvedete dolgi pritisk, kar vam ponudi opcijo Naknadno potrdi na FURS, ki jo izberete.
Dnevno poročilo

### Na koncu dneva lahko naredite dnevno poročilo, oz. zaključek dneva.

Kliknete menujsko tipko in izberete Dnevno poročilo. Poročilo vam prikaze v okencu, spodaj pa sta vidni dve tipki s katerima natisnete poročilo ali pa zaključite dan.

    Natisni poročilo: natisne trenutno videno poročilo. To lahko storite večkrat na dan, če želite.
    Zaključi dan in natistni: spremeni poročilo v zaključek, mu dodeli številko in ga natisne.
    Dnevno poročilo (izdelki): prikaže poročilo prodaje po izdelkih.
    Dnevno poročilo (skupine): prikaže poročilo prodaje po skupinah.

### Naredite varnostno kopijo (backup) baze, izvozite podatke

Priporočljivo je, da na koncu dneva naredite tudi varnostno kopijo (backup) podatkov na Dropbox. Tako boste lahko nadaljevali od zadnjega backup-a, če se vam v vmesnem času Android naprava pokvari, jo izgubite ali želite zamenjati

Ob tem lahko tudi izvozite podatke, ki so za vas aktualni. Datoteke prav tako izvozi na Dropbox in sicer v .csv zapisu. Takšno datoteko lahko odprete v MS Excel, še bolje pa v brezplačni alternativi Open Office Calc (Ali Libre Office).

### Odpis prodanih artiklov v Čebelca Skladišču (opcijsko)

Če uporabljate Čebelca Skladišče, da vodite zalogo artiklom, lahko prodane artikle na dnevnem nivoju avtomatsko odpišete iz zaloge.

Najprej v spletnem skladišču dodate partnerja v smislu "Blagajna: P1-B1" (če je P1 vaša interna oznaka prostora in B1 interna oznaka blagajne - prilagodite za svoj primer). Tako bo vse prodano dodelil temu partnerju, kar vam bo omogočalo boljši pregled, statistiko prodaje, itd. Blagajn imate seveda lahko več. Va takšnem primeru dodate več parnerjev z ujemajočimi oznakami prostorov/blagajn.

Potem na koncu dneva greste na Upravljanje in tam kliknete ... ter Uvoz izvoz podatkov. Iz menuja izberete Dneva prodaja v Skladišče. V skladišču vam bo dodalo prodajni dokument z artikli prodanimi na izbrani dan in s tem zmanjšalo zalogo.
