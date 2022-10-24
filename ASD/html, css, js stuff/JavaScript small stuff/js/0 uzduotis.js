// console.log (123456)
// console.log ('Veikia')

// var x = 3
// var y = 5
// var z = x + y
// console.log('Maryte tor',x,'Obuolius, o Jonuks tor',y,'Obuolius kartu anie tures',z, 'Obuolius')
// var z = 10
// console.log('Suma',z)
// console.log("pridedam 15 ir gaunam", z += 15)
// console.log("Atimsim 19 ir gaunam", z -=19)

// var maryte = 5;
// var jonukas = 9;
// if(maryte > jonukas) {
//     console.log("Maryte turi daugiau obuoliu negu Jonukas"); 
// } else if (jonukas > maryte) {
//     console.log("Jonas turi daugiau obuoliu negu Maryte");
// } else if (jonukas == maryte) {
//     console.log("Kartu turi tiek pat obuoliu ir juos atidave Editai");
// }
// var obuolys = 18,
//     tekstas = " Obuoliu kiekis"
// switch(result = obuolys - 3){
//     case 10:
//         console.log(result + tekstas);
//         break;
//     case 11:
//         console.log(result + tekstas);
//         break;
//     case 12:
//         console.log(result + tekstas);
//         break;
//     case 13:
//         console.log(result + tekstas);
//         break;
//     case 14:
//         console.log(result + tekstas);
//         break;
//     case 15:
//         console.log(result + tekstas);
//         break;
//     default:
//         console.log("Kazkas kito", result)
// }

// var vaisiai = ["Obuolys", "Kriause", "Bananas", "Mandarinas", "Apelsinas", "Avokadas"];
// for (i = 0; i < vaisiai.length; i++){
//     console.log(vaisiai[i]);
// }

// console.log("Masyve yra",vaisiai.length,"vaisiai");
// console.log(vaisiai[2], vaisiai[4]);

// var kintamasis = true;        "if statement"
// if(kintamasis){
//     console.log("Taip");
// } else{
//     console.log("Ne");
// }
// kintamasis ? console.log("Taip") : console.log("Ne");         "Shorthand if"

// var skaicius = 5;
// skaicius > 10 ? console.log(12345) : console.log(54321);  Grazina 54321 Nes False
//  Dar vienas Shorthand if pavyzdys 
//////////////////////////////////////////////////////////////
// function preke(pavad1, padav2 , pavad3){
//     console.log(pavad1, '5eura');
//     console.log(pavad3, 'pavadinimas');
// }
// preke(1, null, 3);
// preke(1);
//Correct way down below this way
// function prekesKaina(kaina, prekespavadinimas){
//     console.log(kaina, 'Eur');
//     console.log(prekespavadinimas, 'prekes pavadinimas');
// }
// prekesKaina(12, 'petelne');
// prekesKaina(200, 'mikrobange');
var divas = document.getElementById("moku");
divas.style.backgroundColor = "#00FF00";
divas.style.width = "300px";
divas.style.height = "300px";
// divas.setAttribute('align','center')
divas.style.margin = "0 auto";
divas.style.marginTop = "30vh";
divas.style.textAlign = "center";
// divas.style.position = "absolute";
// divas.style.top= "50%";
// divas.style.left = "50%";