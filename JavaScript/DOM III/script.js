'use strict';

//--> Synchronous Code
// function sync() {
//   console.log('Hello Ji');
// }
// sync();

// console.log('Kaise ho');

// //- In Synchronous code, code will print line by line first 'Hello ji' will print and then 'Kaise ho'.

// //-- Asynhronous Code
// setTimeout(function () {
//   console.log('Mai Async code ho arram sae execute hounga ');
// }, 3000);

// function sync() {
//   console.log('Hello Ji');
// }
// sync();

// console.log('Kaise ho');

let myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('I am inside pomise');
  }, 5000);
  // resolve(19);
  reject(new Error('Error there !!'));
});
console.log('First');
