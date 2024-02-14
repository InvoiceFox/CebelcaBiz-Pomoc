# Skladišče: Splošna navodila

Z modulom Skladišče vodite zalogo za artikle v vaši lasti. Zalogo vodite preko ustvarjanja dokumentov, program pa na podlagi njih poleg zaloge
beleži še dnevnik za vsak artikel in statistiko. Nabavna vrednost zaloge se vodi po FIFO sistemu - to je aktualno za vaše računovodstvo.

  * [Čemu je namenjen modul Čebelca Skladišče?]()
  * [Šifrant Artiklov]()	
  * [Skladišča]()
  * [Dokumenti]()
	* [Začetno stanje](#zacetno_stanje)
	* [Nabava - vhodni dokument](#nabava_vhodni_dokument)
	* [Prodaja - izhodni dokument](#prodaja_izhodni_dokument)
	* [Premiki med skladišči]()
  * [Iz računa v dobavnico in obratno]()
  * [Zaloga]()
  * [Dnevnik artikla]()
  


## Čemu je namenjen modul Čebelca Skladišče?

Modul je namenjen vodenju zaloge. Lahko ga uporabljate neodvisno ali pa v povezavi s Čebelca Računi.

Nabavna vrednost zaloge se računa po sistemu FIFO (first in, first out), zato se lahko nabavne cene za iste artikle tudi razlikujejo.
Kje vidim trenutno zalogo?

Nad zalogo imate pregled na tabulatorju Zaloga. Program prikaže zalogo za vsa vaša skladišča skupaj, s klikom na posamezno skladišče pa tudi za vsako posebej. Tu vidite tako zalogo posameznega artikla kot tudi vrednost njegove zaloge v FIFO nabavni in prodajni vrednosti. Nabavno vrednost vidite, ko kliknete na posamezno skladišče. Izberete lahko tudi datum, za katerega vas zaloga zanima.
Kako je vodenje skladišča povezano z računi?

Ko robo prodate v skladišču, naredite prodajni dokument. Ta razknjiži vašo zalogo in se lahko natisne kot dobavnica (z ali brez cen). Ko želite za prodano izdati račun, desno pri nabavnemu dokumentu pritisnete tipko V račun in naredil se vam bo račun. Pri računu potem po potrebi le še prilagodite datume (npr. rok plačila), drugi podatki pa se vnesejo že pri kreiranju prodajnega dokumenta, zato ni dvojnega dela.

Podrobneje
## Dokumenti

Na zalogo vplivajo 3 vrste dokumentov. Nabavni dokument doda artikle na zalogo, prodajni pa jih iz zaloge odvzame. Če uporabljate več skladišč, lahko uporabite še prenos, ki prenese artikle iz enega vašega skladišča v drugega.
Kako vzpostavim začetno stanje?

Za vzpostavitev začetnega stanja naredite nabavni dokument, ki ga namesto s številko poimenujete npr. "ZAČETNO STANJE".
Kako se vrednoti zaloga?

Zaloga se vrednoti po sistemu FIFO. Ta pomeni, da so vedno najprej prodani (odšteti) artikli, ki so bili kupljeni prej. To pride do izraza, ko isti artikel ne kupite po isti ceni.
Kje vidim zgodovino artikla?

Na seznamu artiklov in pri zalogi lahko desno kliknete tipko "Dnevnik". Tu boste videli vse, kar se je dogajalo z izbranim artiklom. Če Dnevnik kliknete v posameznem skladišču, boste videli dogodke, ki se tičejo tega skladišča.

## Več skladišč
Kdaj naj uporabim več skladišč?

Več skladišč ni namenjeno temu, da npr. ločite artikle po kategorijah ali jih uproabite zaradi lepšega. Prinesejo tudi določene omejitve in FIFO se računa na nivoju skladišč, zato morajo biti stvarna.

Uporabite jih, ko vam tako reče računovodja, kar je lahko odvisno od samega vašega poslovanja ali pa od tega, da imate res več fizično ločenih skladišč.
Kako se vrednoti zaloga v primeru več skladišč?

FIFO se računa na nivoju posameznih skladišč. Npr. artikel prodan iz skladišča B bo najzgodnejši kupljeni (še na zalogi) iz skladišča B, tudi če je bil pred tem kupljen v skladišče A. En prodajni ali nabavni dokument je lahko vezan le na eno skladišče. Ne morete narediti prodajnega dokumenta, ki bi prodalo artikle iz več skladišč.

## Delovni nalogi, kosovnice
Kdaj potrebujem delovne naloge?

Delovne naloge potrebujete, če imate npr. proizvodno podjetje. Delovni nalog iz zaloge vzame artikle (material) in na zalogo doda druge artikle (izdelke). Če nimate proizvodnje, potem tega ne potrebujete.
Kaj pomeni tipka sestava (kosovnica)?

Artikel (izdelek) je lahko sestavljen iz drugih artiklov (material). S tipko sestava izdelkom določite sestavne dele.
Kako deluje delovni nalog?

Pri delovnem nalogu vnesete izdelke, ki jih želite izdelati, program pa bo na podlagi sestave dodal material. Material se odšteje iz zaloge, izdelki pa se prištejejo na zalogo. Izdelki lahko gredo v drugo skladišče, kot je vir materiala.

## FIFO vrednotenje zaloge
Kaj pomeni FIFO?

FIFO je kratica za First In - First Out (Prvi noter - prvi ven). Nanaša se na vrednotenje zaloge po nabavnih vrednostih, kar bo zanimalo vašega računovodjo.

Nek artikel lahku kupite po različnih nabavnih vrednostih. Nabavne cene vpisujete pri izdelavi nabavnega dokumenta (prevzemnice). FIFO pomeni da ko določeno število kosov artikla prodate, se vrednostno najprej odšteje artikel, ki je bil najprej kupljen.

Primer: kupite artikel A101 najprej 10 kosov po 10 €, naslednjič pa 10 kosov po 12 €. Ko prodate 12 kosov se vaša vrednost zaloge zmanjša za 10x10€ + 2x12€ in na zalogi vam ostane 8x12€.

Kako točno razporedi prodaje lahko vidite v FIFO dnevniku pri pregledu zaloge po posameznem skladišču.

## Kako vidim nabavno vrednost zaloge?

Nabavne vrednosti zaloge določenega artikla program ne prikazuje za vsa skladišča skupaj, jo pa prikaže ko greste na posamezno skladišče, saj mora FIFO potekati na nivoju skladišč. Preko tipke Seštevek zgoraj desno lahko vidite tudi skupno nabavno vrednost celotnega skladišča.
Ponovni preračun zaloge?

FIFO sistem je dokaj kompleksen mehanizem, ki je vezan na celotno verigo dokumentov za nazaj. To pomeni, da če spremenite nek dokument v preteklosti, mora program "premetati" artikle, da step dobi spet prave FIFO vrednosti v sedanjosti. Primeri spremembe so npr. dodajanje ali brisanje prodaje ali nabave, menjava datuma, kar spremeni zalogo v vmesnem času, izbris, dodajanje ali spreminjanje postavke v nabavnem ali prodajnem dokumentu.

Če urejate dokumente za nazaj, je najbolje da poženete popolni preračun zalog. To storite na Nastavitve > Skladišče > Nastavi preračun zaloge. Potem obiščete stran zaloga ali dokumenti in zgoraj vas bo čakalo opozorilo o tem, da želi program ponovno preračunati zalogo od 1.1.2000. Kliknite Preračunaj sedaj.

Program skuša sam zaznati kdaj mora sprožiti preračun in od katerega datuma, a pri večjih spremembah to lahko ne deluje 100%, zato je priporočljivo, da ukaz v takem primeru poženete še sami. Da stvari niso usklajene vidite, če dnevnik artikla prikazuje drugo vrednost zaloge, kot jo kaže sama stran zaloge.

Pozor: pri zalogi je pomemben datum. Če ste npr. naredili prodajni dokument v prihodnosti, bo danes artikel še vedno na zalogi, v efekt pa bo dokument prišel na svoj datum. Prav tako lahko vidite zalogo za katerikoli pretekli (ali prihodnji) datumi.


### Pri preračunu je prišlo do negativne zaloge

Če ste npr. spreminjali dokumente v preteklosti, se pri preračunu lahko pojavi obvestilo da je pri določenem artikli pri določeni prodaji prišlo do negativne zaloge. Npr. prodajni dokument skuša odpisati 5 kosov, na zalogi pa sta le še 2.

Ker FIFO sistem ne more vrednotiti zaloge z vmesnimi negativnimi zalogami in ker je fizično nemogoče, da je šlo iz skladišča več artiklov, kot jih je bilo na zalogi morate v tem primeru rešiti situacijo

Najprej kliknite na modro širfo artikla in odprl se vam bo dnevnik artikla. Tu si oglejte tekoče stanje in opazili boste, da je artikel na neki točki v minusu. Vzroka sta lahko naslednja:

    Artikel ima nabavo, a je ta datumsko kasneje kot prodaja. To je pogosta napaka in pomeni le, da ste vnesli napačen datum prodaje ali nabave. Popravite datume
    Artikel ni na zalogi in le sprememba datuma dokumenta ne bo rešila težave. To pomeni, da ste v nekem trenutku vpisali ali premajhno nabavo, ali jo pozabili vnesti, ali pa ste vnesli preveliko prodajo


Inventura
Kako ustvarimo inventurni dokument?

Obiščete stran Podatki, zgoraj desno. Na strani najdete Skladišče » Inventurni dokument. Izberete skladišče in datum ter pritisnete Prenesi. Prenese se vam seznam artiklov z nabavno vrednostjo, zadnjo nabavno ceno in trenutno količino na zalogi. Desno od trenutne količine je prazen stolpec, kamor vpišete količino ugotovljeno ob inventuri, desno od tega, pa stolpec, kjer Excel sam izračuna inventurno razliko.
Kako poknjižimo inventurne razlike?

To je odvisno od vrste izdelkov (ali so pokvarljivi npr.) a na splošno morate ugotoviti kako je lahko prišlo do razlike.

Npr. pri manjkih je običajno treba ugotoviti ali so posledica kala, slabih izdelkov, ali so bili vrnjeni dobavitelju ali gre npr. za krajo ali kaj manjko za katerega mora nekdo odgovarjati. Glede na to potem tudi poknjižite, kar storite z prodajnim dokumentom. Lahko se zgodi, da morate pri manjku tudi plačati DDV. V besedilo nad tabelo napišete, da gre za inventurno razliko in bolje definirate razloge.

Pri viških prav tako ugotovite kako je lahko do tega prišlo in potem napišete Nabavni dokument. V besedilu nad tebelo napišete da gre za inventurno razliko in podrobneje opišete razlog.

Če imate dodatna vprašanja, nam pišite.

« na osnovno stran

Prijava | Kontakt | Pogosta vprašanja | Pogoji uporabe | Zasebnost

REFAKTOR d.o.o.
Velika Loka 21, 1290 Grosuplje, Slovenija

© 2009-2015, Vse pravice pridržane.

Blog | Facebook | Twitter

Na teh straneh ne uporabljamo piškotkov. Razen sejnega piškotka, ko se prijavite v program, čemur so le-ti namenjeni.
Kako vam lahko pomagamo?

