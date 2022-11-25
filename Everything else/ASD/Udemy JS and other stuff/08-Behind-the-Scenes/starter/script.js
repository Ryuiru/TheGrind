'use strict';
// const jonas = {
//   name: 'jonas',
//   year: 1989,
//   calcAge: function () {
//     return 2037 - this.year;
//   },
// };
// console.log(jonas.calcAge());
// var c = {
//   name: 'THE C OBJECT',
//   log: function () {
//     var self = this;

//     self.name = 'Updated c object';
//     console.log(self, '123');

//     var setname = function (newname) {
//       self.name = newname;
//     };
//     setname('Updated again! the c object');
//     console.log(self, '345');
//   },
// };
const masyvas = ['vienas', 'du', 'trys', 'keturi', 'penki'];

const kazkas = [1, 2, 3, ...masyvas];
console.log(kazkas);
console.log(masyvas);
[1,2, ...3] = [1,2,3,4,5];
