# Dodatek za WooCommerce

## Kje dobite dodatek

Dodatek Čebelca.biz za WooCommerce je odprtokodni projekt na Github-u. Vsak ga lahko brezplačno uporabi, prilagodi svojih zahtevam, 
vabljeni pa ste tudi, da morebitne izboljšave objavite nazaj na githubu.

Dodatek najdete na tej spletni strani: [Cebelca BIZ Woocommerce](https://github.com/InvoiceFox/CebelcaBIZ-WooCommerce)

Repozitorij lahko prenesete preko orodja Git (če ste razvijalec) ali pa na desni kliknete zeleno tipko **Code** in potem **Download ZIP**.

  Dodatek je prosto dostopen in je na voljo "kot je". Za namestitev in morebitno prilagoditev v vašo spletno trgovino morate poskrbeti sami. V večini primerov pa deluje brez posebnega prilagajanja.

## Namestitev

Znotraj ZIP-a najdete mapo **woocommerce-invoicefox**, ki jo naložite na svoj strežnik, običajno v mapo **wp-content/plugins**. Potem greste
v *WooCommerce Admin > Plugins* in tam pri tem pluginu WooCommerce InvoiceFox kliknete **Install**.

## Nastavitve dodatka

V menuju pojdite na WooCommerce > Settings > Integrations > InvoiceFox.


<dl>
  
<dt>API Key</dt>
  <dd>API Ključ. Dobite ga v Čebelci na Nastavitve > Nastavitve dostopa</dd>

<dt>API domain</dt>
   <dd>www.cebelca.biz</dd>

<dt>Application name</dt>
   <dd>Cebelca BIZ</dd>

<dt>Document numbers</dt>
   <dd>Ali naj uporabi ID-je naročil za št. računov. Ne priporočamo.</dd>

<dt>Item description</dt>
    <dd>Ali naj v opis postavke doda celoten opis artikla. Ne priporočamo, običajno predolgo besedilo.</dd>
<dt>Validity of proforma invoices</dt>
    <dd>Če se kreirajo predračuni, koliko dni naj bodo veljavni.</dd>
<dt>Payment period for customer</dt>
    <dd>Koliko dni naj imajo vnešene avtomatsko dodane stranke za rok plačila.</dd>

<dt>Order number label</dt>
    <dd>Besedilo nad tabelo, ki opiše na katero naročilo je vezan račun.</dd>

<dt>Partial SUM label</dt>
    <dd>Besedilo ki označuje delni seštevek preden se doda še stroške dostave.</dd>

<dt>Round netprice to</dt>
    <dd>Na koliko decimalk naj program preračuna neto ceno. Priporočljivo 4.</dd>

<dt>Round item taxrate to</dt>
    <dd>Na koliko decimalk naj preračuna DDV stopnjo (ker jo mora preračunati iz cen). V Sloveniji 1 ali 0 (9.5 ali 22).</dd>

<dt>Round shipping taxrate to</dt>
    <dd>Na koliko decimalk naj preračuna DDV stopnjo (ker jo mora preračunati iz cen) pri stroških dostave.</dd>

<dt>Add SKU to documents</dt>
    <dd>Ali naj se doda šifra artikla k računu. To je nujno če dodatek uproabljate v povezavi s skladiščem.</dd>

<dt>Warehouse ID</dt>
    <dd>ID številka skladišča iz katerga gre materjal. To je nujno če dodatek uproabljate v povezavi s skladiščem.</dd>

<dt>Order actions menu</dt>
    <dd>Ali želite da se pri naročilih prikaže tudi Order actions v zvezi s Čebelco.</dd>

<dt>On status change to "Processing"</dt>
    <dd>Tu nastavite akcije, za katere si želite da se zgodijo ko naročilo dobi status "Processing"</dd>

<dt>On status changet to "Completed"</dt>
    <dd>Tu nastavite akcije, za katere si želite da se zgodijo ko naročilo dobi status "Completed"</dd>

<dt>Fiscalisation for Slovenia</dt>
    <dd>Aktiviraj davčno potrjevanje računov.</dd>

<dt>Fiscalisation test mode</dt>
    <dd>Pustite NUJNO na NE, razen če ste razvijalci. V naslednji verziji bo odstranjeno.</dd>

<dt>Fiscalisation ID of location</dt>
    <dd>Interna ID številka prostora, ki ste ga defenirali pri davčnem potrjevanju</dd>

<dt>Fiscalisation operator's tax ID</dt>
    <dd>Osebna dačna številka osebe, ki izdaja račune</dd>

<dt>Fiscalisation operator's name</dt>
    <dd>Interni naziv osebe, ki izdaja račune. Npr. le ime ali ime in prva črka priimka.</dd>
</dl>

## Tipične nastavitve ob pričetku

Ko začnete uporabljati plugin morate najbrž nastaviti le postavke označene z (*). Torej API ključ, On status Completed, pa
nastavite Create Invoice Draft.

## Uporaba s skladiščem

Če v Čebelci BIZ vodite tudi zalogo z modulom skladišče, potem boste želeli, da račun, ki se kreira preko WooCommerce lahko tudi odpiše
zalogo. V tem primeru bodite pozorni na naslednje stvari.

    V WooCommerce artiklom vpišite SKU. Ta mora biti enak, kot je polje Artikel v Čebelci BIZ.
    Pri nastavitvah plugina dajte Add SKU to documents na Da

V računu v Čebelci BIZ se bo tako pri postavki računa vpisal SKU, potem dvopičje in naziv izdelka in ko boste tak račun dali v skladiščni 
dokument, da se ustvari dobanica in s tem odpiše zaloga bo del pred dvopičjem uporabljen, da se najde pravi artikel.

Skladiščni dokument (dobavnico) lahko ustvarite vi ročno s klikom na računu v Čebelca BIZ, lahko pa tudi nastavite plugin tako, da se to 
zgodi avtomatsko ob spremembi statusa npr. na Completed (Zaključeno).
