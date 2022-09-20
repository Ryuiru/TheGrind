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
var speed = document.getElementById('speed');
speed.addEventListener('click', function(){
    var Pavadinimas = document.getElementById('pavad').value;
    var Greitis = document.getElementById('greitis').value;
    var Mileage = document.getElementById('mileage').value;
    var nuvaziuotaskelias = Mileage / Greitis;
    console.log(Pavadinimas, Greitis, Mileage)
    var divas = document.createElement('div');
    divas.innerHTML =
    'Valandu nuvaziavo: ' +
    nuvaziuotaskelias +
    ' Hours . Kilometrazas: ' +
    Mileage +
    'Km. Masinos pavadinimas yra ' +
    Pavadinimas +
    '. Masinos greitis yra ' + Greitis + 'Km/h';
    //console.log(divas);
    document.body.appendChild(divas);
})

