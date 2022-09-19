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
// 2 uzduotis
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
  // 3 uzduotis
  //masyvas
var heroes = ["Jonas", "Petras", "Antanas", "Hansel", "Gretel"];
//html stringas
var asdf = document.createElement('p');
//pereina per kiekviena heroju ir sukuria sarasa
asdf.style.color = "#FFFFFF";
asdf.style.backgroundColor = '#00FFFF';
heroes.forEach(function (heroes) {
    if(heroes.length%2==1){   
    asdf += '<p>' + heroes ;
    // document.querySelector('#sarasas').innerHTML = asdf;
}   else{
    asdf += '<p>' + heroes ;
    document.querySelector('#sarasas').innerHTML = asdf;
}
});
//padaro sarasa
// asdf = '<p>' + asdf + '</p>';
//ikeliamas kazkodel reikia # prie query selector kitep neveikia
console.log(asdf);