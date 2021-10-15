# Izvoz podatkov v računovodske programe

## Uvod

Spletni program omogoča izvoz podatkov v XML obliki v najbolj razširjene računovodske programe v Sloveniji. Zapis VOD XML podpirajo programi Vasco, Opal 
in Datalab Pantheon, SAOP MiniMax pa ima svoj XML zapis. XML zapisi običajno omogočajo neposreden uvoz knjižb v glavno knjigo. Zato morate v Čebelca BIZ
nastaviti željene konte.

## Kazalo

### Nastavitve pred izvozom

* Kontni načrt
* Konti za ne-računovodje
* Šifre partnerjev

### VOD in SAOP XML

* Postopek izvoza
* Primeri knjižb
* Avansni in končni račun
* Računi v tujino

### Ostale možnosti izvoza

* Seznam ali poročilo v Excel-u
* E-slog (e-račun)

## Nastavitve pred izvozom

### Kontni načrt

Pri uvozu v računovodske programe Vasco, Opal, Datalab in MiniMax podatki uvozijo neposredno v v Glavno knjigo. Knjižbe v glavni knjigi morajo vsebovati 
pravilne **računovodske konte**, zato se posvetujte z vašim računovoskim servisom kakšne konte želijo. Kontni načrt se nastavi v Čebelci na strani 
**Nastavitve > Kontni načrt**.

Lahko za začetek te nastavitve tudi pustite kot so, saj so nastavljene na najbolj pogoste vrednosti, računovodja pa vam po povedal če je potrebno kaj prilagoditi.

### Konti za ne-računovodje

S konti se bo ukvarjalo vaše računovodstvo. Le za res najbolj osnovno predstavo, konti so nekakšne kategorije, označujejo jih določene številke.
Odvisno od račuvodstva so lahko to 3, 4 ali več-mestna števila. Pri izdanih računih gre najbolj pogosto za 3 kontne skupine 1xxx/12xx, 26xx, 76xx:

* 10xx - denarna sredstva v blagajni 
* 12xx - terjatve do kupcev 
* 26xx - obveznosti do države (davki, npr ddv)
* 76xx - poslovni prihodki

Točen konto je lahko odvisen od načina plačila, države kupca, davčne stopnje, itd.

### Šifre partnerjev

Če je partner (kupec) podjetje je šifra njihova davčna številka. Ta sistem je podprt v vseh zgoraj naštetih računvoodskih programih in tako se izognete 
dodatnemu koraku - sinhronizaciji partnerjev. Vse kupce fizične osebe pa računovodstva običajno knjižijo pod isto (določeno) šifro. To šifro si lahko nastavite
na strani **Kontni načrt** spodaj. Če partner ne bo imel vnešene davčne številke in ste v tej nastavitvi kaj vpisali, bo program določil to šifro partnerja.

### Trg, domači, EU, tuji

Da bo program vedel v kateri trg naj dodeli določen račun morate pri partnerju pravilno vnesti ID za ddv in/ali Državo. Če je partner podjetje v EU, potem vnesite
njihod ID za DDV skupaj s predpono. Npr. v Sloveniji je ta SI, v Italiji IT, itd. Če kupec nima ID za DDV (je fizična oseba), potem pravilno vnesite državo.

