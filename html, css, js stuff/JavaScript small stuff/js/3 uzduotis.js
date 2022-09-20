//sukuriamas sarasas
// const list = [
//     {
//         Forename: "Joe",
//         Surname: "Joekickinton",
//         Height: "190cm",
//         Age: "23",
//         RunningSpeed: "6 m/s",
//     },
//     {
//         Forename: "Mike",
//         Surname: "Mikekinton",
//         Height: "195cm",
//         Age: "27",
//         RunningSpeed: "8 m/s",
//     },
//     {
//         Forename: "Alfred",
//         Surname: "Alfreton",
//         Height: "188cm",
//         Age: "32",
//         RunningSpeed: "6.5 m/s",
//     },
// ];
// list.forEach((element) => console.log(element));
// for (i = 0; i < list.length; i++) {
//     console.log(list[i]);
//     var divas = document.createElement('div');
//     divas.innerHTML = element.Forename + " " + element.Surname;
//     document.body.appendChild(divas);
//   }
//Palei Abecele padaro sarasa 
// list.sort((a, b) => a.Forename.localeCompare(b.Forename))
// //Atvaizduojamas sarasas
// list.forEach(function (element, index) {{
//     var divas = document.createElement('div');
//     divas.innerHTML = element.Forename + " " + element.Surname;
//     document.body.appendChild(divas);
//   }
// })
// //greiciausias iki leciausio
// list.sort((b, a) => a.RunningSpeed.localeCompare(b.RunningSpeed));
// list.forEach(function (element, index) {{
//     var divas = document.createElement('div');
//     divas.innerHTML = element.Forename + " " + element.Surname +" bega greiciu "+ element.RunningSpeed;
//     document.body.appendChild(divas);
//   }
// })
// Nr. 2 Uzduotis
// var speed = document.getElementById('speed');
// speed.addEventListener('click', function(){
//     var Pavadinimas = document.getElementById('pavad').value;
//     var Greitis = document.getElementById('greitis').value;
//     var Mileage = document.getElementById('mileage').value;
//     var nuvaziuotaskelias = Mileage / Greitis;
//     console.log(Pavadinimas, Greitis, Mileage)
//     var divas = document.createElement('div');
//     divas.innerHTML =
//     'Valandu nuvaziavo: ' +
//     nuvaziuotaskelias +
//     ' Hours . Kilometrazas: ' +
//     Mileage +
//     'Km. Masinos pavadinimas yra ' +
//     Pavadinimas +
//     '. Masinos greitis yra ' + Greitis + 'Km/h';
//     //console.log(divas);
//     document.body.appendChild(divas);
// })
//Nr . 1 Uzduotis
class futbolistai {
    constructor(vardas, pavarde, ugis, amzius, begimogreitis) {
      this.vardas = vardas;
      this.pavarde = pavarde;
      this.ugis = ugis;
      this.amzius = amzius;
      this.begimogreitis = begimogreitis;
    }
// // Getter
//   get area() {
//     return this.calcArea();
//   }
// // Method
//     calcArea() {
//     return this.vardas, this.pavarde;
//   }
}
const vienas = new futbolistai('Jonas', 'Jonaitis', 190, 34, 5);
const du = new futbolistai('Petras', 'Petrovic', 182, 29, 6);
const trys = new futbolistai('Alfonsas', 'Alphonse', 192, 24, 5.5);
// document.getElementById("demo").innerHTML = vienas + " " + du + " " + trys;
// console.log(vienas.amzius, du, trys);


const list = [{vienas},{du},{trys}];
// list.forEach((element) => console.log(element));
for (i = 0; i < list.length; i++) {
    console.log(list[i]);
    var divas = document.createElement('div');
    // divas.innerHTML = vienas.vardas + " " + vienas.pavarde;
    document.body.appendChild(divas);
}
// heroes.forEach((element) => console.log(element));
