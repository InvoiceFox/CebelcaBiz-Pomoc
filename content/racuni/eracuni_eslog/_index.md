
# eRačuni - navodila

## Kako ustvarim eRačun v Čebelci?

eRačun naredite kot običajen račun v Čebelci. Le bodite pozorni na to, da pri partnerju vnesete še matično številko in BIC kodo. Polja najdete s klikom na povezavo Podatki za eRačun.

Tudi pri nastavitvah, pri podatkih o vašem podjetju morate imeti vnešeno BIC kodo in matično številko.

Ko račun ustvarite v vrstici računa pritisnite PDF in uporabite eno od dveh povezav za eRačun: prenesi XML ali prenesi ZIP. Izbira je odvisna od banke, preko katere boste poslali eRačun na UJP. Spletne banke običajno potrebujejo ZIP, eBanke z Hal-e-bank (npr. Proklik) pa le XML.

## Kako pošljem eRačun proračunskemu uporabniku?

Najbolj tipiščno je, da pošljete eRačun preko svoje eBanke. Banke imajo medbančni sisitem za pošiljanje eRačunov, in ga pošljejo tudi na UJP (kjer ga proračunski uporabnik prejme). Sam postopek je odvisen od banke. Prvi korak je, da banki javite naj vam aktivirajo pošiljanje eRačunov. S tem vas tudi dodajo v register izdajateljev eRačunov, kjer morate biti vnešeni, da lahko eRačun pošljete in vam pošljejo navodila za pošiljanje eRačunov.

Uvoz v vašo spletno eBanko: v spletne eBanke običajno naložite ZIP paket, ki ga dobite s tipko Prenesi ZIP. Običajno boste v menuju spletne banke našli nekaj v smislu E-račun / naloži paket. Potem izberete ZIP iz svojega računalnika in ta se naloži na eBanko in pošlje. Čez nekaj ur preverite status eRačuna, da vidite ali je bil uspešno prejet s strani prejemnika.

Uvoz v Hal e-bank (Proklik): v program Hal e-bank uvozite le XML (Prenesi XML) in po potrebi PDF računa. Hal eBank potem doda ovojnico in paket podpiše z vašim digitalnim potrdilom.

Ročni vnos v UJP: Če sami niste proračunski uporabnik, lahko v portal UJP neposredno vnesete do 5 eRačunov mesečno. Vendar jih morate ponovno ročno vnesti (uvoza ne omogočajo). Za prijavo v UJP potrebujete digitalno potdilo (Sigenca, Poštarca, ACNLB). Potrdilo je lahko tudi na poljubno pooblaščeno fizično osebo.

Uvoz v UJP: To je mogoče le, če ste proračunski uporabnik. V tem primeru vam UJP omogoča uvoz eRačuna. Uporabite (ujp), preko katerega vam Čebelca kreira ZIP paket, ki je posebej prilagojen za uvoz v UJP.

## Ali naj izberem ZIP ali XML

To je odvisno od tega, preko katere organizacije pošiljate eRačun:

Prenesi ZIP: Spletne eBanke: Deželna Banka Slovenije, NKBM, Banka Koper, Delavska Hranilnica, Sberbank, Lon, ...

Prenesi XML: Pošta Slovenije, NLB, SKB banka, Abanka, Factor banka, Raiffeisen Krekova banka, Hypo Alpe-Adria-Bank, Probanka - če uporabljate program, ki je nameščen na vaš Windows sistem, ne spletne banke. Nekatere banke nudijo spletno eBanko in Hal E-bank, tako da je odvisno od tega kaj uporabljate.
Težave pri preverjanju vhodnih podatkov

eRačun standard je zelo natančen tudi glede vnešenih podatkov, zato mora program preveriti podatke vašega podjetja, podatke partnerja in same podatke računa ali so v skladu z zahtevami eRačuna. Če tega ne preverimo in podatki niso v skladu, bo eRačun avtomatsko zavrnjen na banki, pri UJP ali pri končnemu prejemniku.

Če je bil račun na banki zavrnjen, jih lahko pokličete in vprašate v čem je težava, da račun ni bil sprejet.

V primeru težav partnerja popravite podatke za partnerja, enako pri samem računu. Pri vaših nastavitvah pa je nujen dodaten korak, ker si je račun zapomnil nastavitve iz trenutka nastanka računa. To rešite s 3 kliki. Prosim preberite si drugo poglavje pri rubriki Nastavitve.

## IBAN številka

Če nameravate izdajati eRačune, je IBAN številka nujen podatek. In sicer za vaše podjetje pri 'Nastavitve » Podatki o podjetju' ter za partnerje katerim nameravate izdati eRačun.

IBAN naj bo zapisan v polni obliki, za Slovenijo se začne z SI56. Zapis lahko vsebuje presledke.

## BIC koda banke oz. UJP

Če boste pošiljali eRačune z ovojnico, kot ZIP datoteka, je za vas in prejemnika eRačuna potrebno vnesti tudi BIC kodo. BIC koda mora biti v dolgi, 11-mestni obliki. Na primer za NLB strani je njihova bic koda zapisana kot LJBASI2X, pravilna BIC koda za eRačune pa je v tem primeru LJBASI2XXXX.

POZOR: če je prejemnik eRačuna proračunski uporabnik mu vpišete BIC kodo UJP sistema in sicer UJPLSI2DICL. Pri urejanju partnerja poleg polja BIC koda kliknete modro povezavo proračunski uporabnik in pravi BIC se vam vpiše v polje.

Če ste sami proračunski porabnik, za svojo BIC prav tako vpišete UJPLSI2DICL.
## Digitalni podpis

eRačun mora biti podpisan. Včasih to stori namesto vas banka, včasih ga podpišete v spletni banki, pri nekaterih bankah pa ga morate že pred nalaganjem podpisati sami:

* Če ste npr. Pri Unicredit, Sberbank, Delavski hranilnici, NKBM ali Banki Koper potem ga morate že sami podpisati. Če imate digitalno potrdilo (AC NLB, SIGEN-CA ali POŠTA®CA), lahko eRačun podpišete s pomočjo brezplačnega programčka Čebelca Podpis.
* Če ste pri NLB in uporabljte Proklik, ali uporabljate Hal E-bank pri kateri od drugih bank, boste lahko eRačun podpisali v sami E-banki.
* Če ste pri DBS pa eRačun v banki sami podpišejo, za kar jih pooblastite.

