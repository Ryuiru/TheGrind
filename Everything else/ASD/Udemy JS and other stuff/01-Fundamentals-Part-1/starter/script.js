// let js = 'amazing';
// if(js === 'amazing') alert('javascript is crap');
// 40 + 40 + 8 + 12 -500;
// console.log( 40 + 40 + 8 + 12 -500);

// markMass = 78; //data stored into variables
// markHeight = 1.69;
// johnMass = 92;
// johnHeight = 1.95;

// markMass = 95;
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.76;


// markBMI = markMass / markHeight ** 2;//calculating BMI
// johnBMI = johnMass / johnHeight ** 2;

// markHigherBMI = markBMI >= johnBMI;//is marks bigger than johns?
// console.log(markHigherBMI);


// if(markBMI>johnBMI){
//     console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`)
// } else {
//     console.log(`Mark's BMI ${markBMI} is lower than John's BMI ${johnBMI}`)
// }

// let dolphinsAVG = (96 + 108 + 89) / 3;
// let koalasAVG = (88 + 91 + 110) / 3; //Main

// let dolphinsAVG = (97 + 112 + 101) / 3;
// let koalasAVG = (109 + 95 + 123) / 3; // Bonus 1

// let dolphinsAVG = (97 + 112 + 101) / 3;
// let koalasAVG = (109 + 95 + 106) / 3; // BONUS 2

// if (dolphinsAVG > koalasAVG){          //Main
//     console.log(`Dolphins won ${dolphinsAVG}`)
// } else if (koalasAVG > dolphinsAVG){
//     console.log(`Koalas won ${koalasAVG}`)
// } else { 
//     console.log(`its a draw`)
// };

// console.log(`Dolphin score ${dolphinsAVG}`)
// console.log(`Koala score ${koalasAVG}`)

// minScore = 100;

// if ((koalasAVG > dolphinsAVG) && (koalasAVG > minScore)){         //BONUS 1
//     console.log(`Koalas won and score is higher than 100`)
// } else if ((dolphinsAVG > koalasAVG) && (dolphinsAVG > minScore)){
//     console.log(`Dolphins won and score is higher than 100`)
// } else { 
//     console.log(`There isnt a team with score above 100`)
// };

// if ((koalasAVG > dolphinsAVG) && (koalasAVG > minScore)){
//     console.log(`Koalas won and score is higher than 100`)
// } else if ((dolphinsAVG > koalasAVG) && (dolphinsAVG > minScore)){
//     console.log(`Dolphins won and score is higher than 100`)
// } else if ((dolphinsAVG === koalasAVG) && (koalasAVG >= minScore) && (dolphinsAVG >= minScore)){ 
//     console.log(`It's a draw!`)
// } else {console.log(`Below 100 points no1 wins!!`)
// }
// The switch Statement
// const day = 'thursday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }
// if (day === 'wednesday' || day ==='thursday'){
//     console.log(`its coding day my dudes`)
// } else {
//     console.log(`not a coding day`)
// };

// const bill = 275;
// const bill = 40;
const bill = 430;

const tip = (bill >= 50) && (bill <= 300) ? bill * 0.15 : bill * 0.20;
const fullPrice = bill + tip;  
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${fullPrice}.`)

