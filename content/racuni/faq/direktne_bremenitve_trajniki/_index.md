# Trajniki

Če želite vašim strankam zaračunavati v obliki trajnikov, vam pri tem lahko pomaga Čebelca BIZ.

## Kaj je trajnik?

Trajnik ali direktna bremenitev je mehanizem, da ob soglasju vaše stranke, vi sami sprožite plačilo na svoj račun. Uporablja se predvsem za ponavljajoče stroške, kot so mesečne naročnine, članarine in podobno.

## Kako poteka?

Da se trajnik izvede, morate na svojo e-banko naložiti posebno XML datoteko. V njej je seznam direktnih obremenitev, ki jih potem banka izvede ob predvidenih datumih. V eni XML datoteki je običajno več obremenitev.

Čebelca BIZ vam zna ustvariti to XML datoteko. Datoteko izdela na podlagi računov, ki ste jih ustvarili in na podlagi soglasij, ki ste jih vpisali v Čebelco. 

## Kaj potrebujete?

### Podatki o partnerju

Partner oz. stranka je lahko pravna ali fizična oseba. Pri njej je potrebno vpisati naslednje podatke:

* Naziv (Ime, priimek ali naziv podjetja)
* Ulica, Poštna št., Kraj
* Davčna številka (pri pravni osebi)
* IBAN - številka bančnega računa, v Sloveniji se začne s SI56
* BIC - BIC/SWIFT oznaka banke

### Soglasja

Od svojih strank morate prejeti podpisana soglasja. Pri soglasju so pomembni podatki:

* Številka soglasja (referenca) - oštevilčite jih sami
* Datum podpisa soglasja
* Ali gre za pravno ali fizično osebo (B2B - business 2 business)

### Račune

V programu normalno kreirate račune in izberete partnerje, ki ste jim vnesli soglasja.

## Kako pridobite XML?

Obiščite stran **Podatki** zgoraj desno. Na strani, ki se odpre, najdete rubriko **Trajnik - Sepa SDD XML**. Tam določite obdobje npr. določen dan ali daljše obdobje.

Program bo v XML datoteko za trajnike vpisal vse račune, ki:

* imajo **datum izdaje** v vnesenem obdobju (vključujoče)
* so za izbrane partnerje **vpisana soglasja**

## Datoteko naložite na e-banko

Datoteko naložite na vašo e-banko in plačila se bodo izvedla, da datume valute. Večina bank bo želela, da ji vnaprej ustvarite primer XML datoteke, da preverijo, ali je v redu. Tudi to storite, kot je opisano zgoraj v programu Čebelca BIZ.

## Pohitrite vnos partnerjev in soglasij uvozom

Program Čebelca BIZ omogoča, da podatke partnerjev in soglasij pripravite v Excel datoteki (priporočamo brezplačni LibreOffice) ter uvozite v eni potezi.

Datoteka mora imeti pravo razporeditev stolpcev, kar pri Excelu ali LibreOffice ni težko doseči. Nudimo vam primer .xlsx dodateke, po kateri pripravite svoje podatke:

	* [Primer vnosa partnerjev in soglasij](https://www.cebelca.biz/static/zagotovitev_partnerjev_sepa_sdd.xlsx)
	
	
