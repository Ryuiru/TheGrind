// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const data = [17, 21, 23];
const data1 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ...`;
  }
  console.log(`...` + str);
}
printForecast(data);
// console.log(data);
printForecast(data1);
// MAKE DATA TO BE DISPLAYED AS A STRING NOT A NUMBER
console.log(typeof data);
