// function yay(){
//     alert('Mėgstu programuoti.Yey!');
// }
// console.log(yay);
// yay();
//1 Uzduotis
// function apskaiciavimas() {
//     var vaisius = document.getElementById('fruit').value;
//     var kaina = document.getElementById('price').value;
//     var produktas = 5 * parseInt(kaina);
//     document.write(vaisius);
//     document.write(produktas);
//   }
///////////////////
// // 1. Sukuriama funkcija 2 uzduotis
// function preke(kaina,pavadinimas){
//   var kainaVaisiaus = kaina*5;
//   return 'penkiu vaisiu: ' + pavadinimas + " kaina " + kainaVaisiaus;
// }
// var ats = preke(2, 'keksai');
// var divas = document.createElement('div');
// divas.innerHTML = ats;
// // 2. atvaizduojama i ekrana
// document.body.appendChild(divas);
// document.body.innerHTML = ats;
// console.log(preke(2, 'vaflis'));
/////////////////////
// 3 uzduotis
// function apskaiciavimas() {
//     var vaisius = document.getElementById('fruit').value;
//     var kaina = document.getElementById('price').value;
//     var kiekis = document.getElementById('quantity').value;
//     var produktas = parseInt(kiekis) * parseInt(kaina);
//     document.write('Perkame: ',vaisius);
//     document.write("<br>");
//     document.write('Kiekis: ',kiekis);
//     document.write("<br>");
//     document.write('Pilna kaina: ',produktas,' Eurai');
//   }
//1. Sukurti HTML
//2. Paimti reiksmes ant paspaudimo mygtuko
// 2.1 issiaiskinti kaip paimti reiksme
//3. Suskaiciuoti kaina
//4. Atvaizduoti ekrane
var btn = document.getElementById('ats');
btn.addEventListener('click', function() {
  var pav = document.querySelector('input [placeholder=Pavadinimas]').value;
  var kaina = document.querySelector('input [placeholder=Kaina]').value;
  var kiekis = document.getElementById('kiekis').value;
  var kokiaKaina = kaina * kiekis;
  console.log(pav, kaina);
  var divas = document.createElement('div');
  divas.innerHTML =
  'Kaina lygi' +
  kokiaKaina +
  '. Buvo pirktas toks kiekis: ' +
  kiekis +
  ' ir taip vadinasi ' +
  pav;
  //console.log(divas);
  document.body.appendChild(divas);
});
  // 4 uzduotis
  //sukurtas masyvas su savybem
// var heroes = [
//   {
//     name: "Human Male",
//     skill: "Walk",
//   },
//   {
//     name: "Computer",
//     skill: "Be computer",
//   },
//   {
//     name: "Vilkas",
//     skill: 'Zudo',
//   },
// ];

// 2. Per forEach atvaizduoti elementa.
// 2.1 Issiaiskinti kaip naudot foeEach
//2.2 Kaip gauti lygini
//2.3 Atvaizduoti i ekrana
//2.4 Nuspalvinti lyginius

// heroes.forEach((element) => console.log(element));
// heroes.forEach(function (element, index) {
//   var arLyginis = index + 1;

//   if(arLyginis % 2 == 0){
//   console.log(arLyginis, element, 'ar lyginis');
//   var divas = document.createElement('div');
//   divas.innerHTML = element.name + " " + element.skill;
//   divas.style.color = "white";
//   divas.style.backgroundColor = "blue";
//   document.body.appendChild(divas);
// }else {
//   var divas = document.createElement('div');
//   divas.innerHTML = element.name + ' ' + element.skill;
//   document.body.appendChild(divas);
// }
//   console.log(element, index);
// })