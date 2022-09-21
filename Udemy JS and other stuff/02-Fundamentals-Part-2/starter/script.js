'use strict';

///////////////////////////////////////
// Functions
// function logger() {
//     console.log('My name is Jonas');
//   }
  
//   // calling / running / invoking function
//   logger();
//   logger();
//   logger();
  
//   //functions fruitProcessor insidecomma(are called parameters are somelike variables)
//   function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
//   }
  
//   const appleJuice = fruitProcessor(5, 0); // appleJuice is a prop of a Function// fruitProcessor(x, y) has arguments they can be empty and will be undefined 
//   console.log(appleJuice);
  
//   const appleOrangeJuice = fruitProcessor(2, 4);
//   console.log(appleOrangeJuice);
  
//   const num = Number('23');
// const miltai = fruitProcessor();
// console.log(miltai);

// console.log(fruitProcessor());
// console.log(fruitProcessor(10));
// console.log(fruitProcessor('asd', 15));

// console.log(appleJuice + ' ' + appleOrangeJuice);
///////////////////////////////////////
// Functions
// function logger() {
//     console.log('My name is Jonas');
//   }
  
//   // calling / running / invoking function
//   logger();
//   logger();
//   logger();
  
//   function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
//   }
  
//   const appleJuice = fruitProcessor(5, 0);
//   console.log(appleJuice);
  
//   const appleOrangeJuice = fruitProcessor(2, 4);
//   console.log(appleOrangeJuice);
  
//   const num = Number('23');
  
  
//   ///////////////////////////////////////
//   // Function Declarations vs. Expressions
  
//   // Function declaration
//   function calcAge1(birthYeah) {
//     return 2037 - birthYeah;
//   }
//   const age1 = calcAge1(1991);
  
//   // Function expression
//   const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
//   }
//   const age2 = calcAge2(1991);
  
//   console.log(age1, age2);
  
  
//   ///////////////////////////////////////
//   // Arrow functions
  
//   const calcAge3 = birthYeah => 2037 - birthYeah;
//   const age3 = calcAge3(1991);
//   console.log(age3);
  
//   const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
//   }
  
//   console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));
  
  
//   ///////////////////////////////////////
//   // Functions Calling Other Functions
//   function cutFruitPieces(fruit) {
//     return fruit * 4;
//   }
  
//   function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
  
//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
//   }
//   console.log(fruitProcessor(2, 3));
const calcAverage = (score1, score2, score3) => {
    const avgScore = (score1 + score2 + score3) / 3;
    return avgScore;
}
// const calcAverage = (a, b, c) => (a + b + c) /3; //correct way of doing arrow function
// console.log(calcAverage(3,4,5)); //returns 4
// const dolphinsAvg = calcAverage(44, 23, 71)
// const koalasAvg = calcAverage(65, 54, 49)
let dolphinsAvg = calcAverage(44, 23, 71)
let koalasAvg = calcAverage(65, 54, 49)

function checkWinner(koalasAvg, dolphinsAvg){
    if (koalasAvg >= (dolphinsAvg * 2)){
        console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg}).`)
    } else if(dolphinsAvg >= (koalasAvg * 2)){
        console.log(`Dolphins won (${dolphinsAvg} vs. ${koalasAvg}).`)
    } else {
        console.log(`No team won cuz no 2x points`)
}
}
checkWinner(koalasAvg, dolphinsAvg);
// checkWinner(300, 120); inject ur onw values

dolphinsAvg = calcAverage(85, 54, 41)
koalasAvg = calcAverage(23, 34, 27)

checkWinner(koalasAvg, dolphinsAvg);