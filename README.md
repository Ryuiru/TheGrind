"# TheGrind" 
1. taisykle apie display block elementai blokiniai elementai nepriiema kitu blokiniu elementu nes blokas neleidzia viens prie kito.
Blokiniai elementai centruojasi ir margin: 0 aUTO; ir plotis turi buti maziau negu 100%
antra taisykle: apie inline-block elementus ir ju esme elementai prisispaudzia vienas prie kito jeigu jiems uztenka plocio teviniam Containers. 
Norint 100% sutalpinti 2 inline elementus 

1. Taisykle:
Blokiniai elementai uzima visa ploti ir isstumia po savim kaimynus(kitus elementus). Blokiniai elementai centruojasi su margin: 0 auto; width: maziau nei 100% (tevinis elementas) (taip pat gal ir reikia ant tevinio elemento irgi margin: 0 auto; uzdeti)

2. Taisykle:
Inline-block elementai priima draugelius salia ir neisstumia po savim, jeigu jiems uztenka plocio tevinio elemento atzvilgiu.
Jeigu noriu 100%(procentu), tarkim, po 50%, tai ant tevinio elemento reik uzdeti font-size:0; ir jeigu naudojama Padding: 1px ar daugiau naudoti box-sizing: border-box; ant child div.

3. Floatai

    