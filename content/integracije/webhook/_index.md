# Nastavitve webhook-a

_stran je še v delu_

## Kaj je webhook?

Webhook pomeni, da ob določenem dogodku čebelca pokliče vašo spletno stran, vaš API, in mu pošlje podatke povezane z dogodkom.

## Aktivacija webhooka

Da nastavite webhook klic, morate vnesti (oz. nam poslati) pri določenem Čebelca BIZ uporabniku naslednje podatke:
* URL, ki naj se pokliče;
* authentikacija (bearer token, ki naj se nastavi pri klicu);
* vrsta dogodka.

## Vrste dogodka

Trenutno so na voljo naslednje vrste dogodka:
  
  * Skladiščni dokument

### Skladiščni dokument (W-I-P)

Pri Skladišču, če odprete vhodni ali izhodni dokument boste zgoraj desno našli tipko "Obvesti". Ko jo pritisnete, se bo za artikle na tem dokumentu poslal klic na definirani webhook.
Pri klicu bodo podane šifre artiklov (SKU) in pa količine trenutne zaloge artiklov. Tako lahko ob prevzemnici ali dobavnici (izhodnem dokumentu) npr. osvežite stanje zaloge v vaši spletni trgovini.

Na ta način tudi, če tipko pritisnete večkrat, se zaloga ne bo večkrat npr. prištela, ampak vedno le "updejtala". Temu primerno morate urediti skripto, ki jo webhook pokliče.

Na vnešeni naslov se pošlje HTTP POST zahtevek s podatki v obliki: 

````
[{ "code": "A101", "qty": 103 }, { "code": "B202", "qty": 5.0 }]
````

Če update uspe, naj vaša skripta nazaj vrne:

````
[{ "result": "OK", "updated": 2 }]
````

V "updated" zapišete, koliko artiklom ste posodobili količino.

````
[{ "result": "Failed", "reason": "..." }]
````

Trenutno je za klic sinhronizacije namenjena tipka, kasneje bomo premislili, če lahko naredimo ta klic tudi brez pritiska na tipko. Tehnično imamo pripravljen tudi webhook, ki posodobi zalogo vsem artiklom.
