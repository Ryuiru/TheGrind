"use strict";

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
// const calcAverage = (score1, score2, score3) => {
//     const avgScore = (score1 + score2 + score3) / 3;
//     return avgScore;
// }
// // const calcAverage = (a, b, c) => (a + b + c) /3; //correct way of doing arrow function
// // console.log(calcAverage(3,4,5)); //returns 4
// // const dolphinsAvg = calcAverage(44, 23, 71)
// // const koalasAvg = calcAverage(65, 54, 49)
// let dolphinsAvg = calcAverage(44, 23, 71)
// let koalasAvg = calcAverage(65, 54, 49)

// function checkWinner(koalasAvg, dolphinsAvg){
//     if (koalasAvg >= (dolphinsAvg * 2)){
//         console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg}).`)
//     } else if(dolphinsAvg >= (koalasAvg * 2)){
//         console.log(`Dolphins won (${dolphinsAvg} vs. ${koalasAvg}).`)
//     } else {
//         console.log(`No team won cuz no 2x points`)
// }
// }
// checkWinner(koalasAvg, dolphinsAvg);
// // checkWinner(300, 120); inject ur onw values

// dolphinsAvg = calcAverage(85, 54, 41)
// koalasAvg = calcAverage(23, 34, 27)

// checkWinner(koalasAvg, dolphinsAvg);
// Introduction to Arrays
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// ///////////////////////////////////////
// // Basic Array Operations (Methods)
// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }
// */
///////////////// Coding Challenge #2
///////////////////////////////////////
// const calcTip = function(cash){tip
//     const tip = (cash >= 50) && (cash <= 300) ? cash * 0.15 : cash * 0.20;
//     return tip;
// }
// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])]
// console.log(`Your tips sir ${tips}`);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(`And your total with a tip ${total}`);
// const jonas = {
//     firstName: 'Jonas',
//     friends: ['Michael', 'Peter', 'Steven'],
//     bestFriend: 'Michael',
//     birthYear: 1991,
//     hasDriversLicense: true,
//     job: 'teacher',

//     // calcAge: function(birthYear){
//     //     return 2040 - birthYear;
//     // }
//     // calcAge: function(){
//     //     return 2040 - this.birthYear;
//     // }
//     calcAge: function(){
//         this.age = 2040 -this.birthYear;
//         return this.age;
//     },
//     calcAge1: function(){
//         this.age = 2042 -this.birthYear;
//         return this.age;
//     },
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'NO'} driver's loicence.`
//     }
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.calcAge1());
// console.log(jonas.age);
// // console.log(jonas['calcAge'](1991));
// // console.log(`${jonas.firstName} has ${jonas.friends.length} and his best friend is called ${jonas.bestFriend}`);
// console.log(jonas.getSummary());
/////////////////////////////////
// Coding challenge #3

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     weight: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
// }
// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     weight: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
// }
// mark.calcBMI();
// john.calcBMI();BMI
// if (mark.bmi > john.bmi){
//     console.log(`${mark.firstName} ${mark.lastName} BMI(${mark.bmi}) is higher than ${john.firstName} ${john.lastName} BMI(${john.bmi})`)
// } else {
//     console.log(`${john.firstName} ${john.lastName} BMI(${john.bmi}) is higher than ${mark.firstName} ${mark.lastName} BMI(${mark.bmi})`)
// }

//     const tip = (cash >= 50) && (cash <= 300) ? cash * 0.15 : cash * 0.2
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (cash) {
  const tip = cash >= 50 && cash <= 300 ? cash * 0.15 : cash * 0.2;
  return tip;
};
for (let i = 0; i < bills.length; i++) {
  // const tip = calcTip(bills[i]);   how the guy in the video did storing
  // tips.push(tip);                  the tip into a variable and calculating with
  // totals.push(tip + bills[i]);      it
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  sum /= arr.length;
  console.log(sum); // u can put console.log at the end of function to get the
}

calcAverage(totals);
console.log(tips, totals);
// const calcTip = function(cash){
//     const tip = (cash >= 50) && (cash <= 300) ? cash * 0.15 : cash * 0.20;
//     return tip;
// }
// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])]
// console.log(`Your tips sir ${tips}`);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(`And your total with a tip ${total}`);
///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
//   ];
//   const types = [];

//   // console.log(jonas[0])
//   // console.log(jonas[1])
//   // ...
//   // console.log(jonas[4])
//   // jonas[5] does NOT exist

//   for (let i = 0; i < jonas.length; i++) {
//     // Reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     // Filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
//   }

//   console.log(types);

//   const years = [1991, 2007, 1969, 2020];
//   const ages = [];

//   for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
//   }
//   console.log(ages);

//   // continue and break
//   console.log('--- ONLY STRINGS ---')
//   for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
//   }

//   console.log('--- BREAK WITH NUMBER ---')
//   for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;

//     console.log(jonas[i], typeof jonas[i]);
//   }

//   ///////////////////////////////////////
//   // Looping Backwards and Loops in Loops
//   const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
//   ];

//   // 0, 1, ..., 4
//   // 4, 3, ..., 0

//   for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
//   }

//   for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//       console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//     }
//   }

//   ///////////////////////////////////////
//   // The while Loop
//   for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//   }

//   let rep = 1;
//   while (rep <= 10) {
//     // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
//   }

//   let dice = Math.trunc(Math.random() * 6) + 1;

//   while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
//   }
//   */
