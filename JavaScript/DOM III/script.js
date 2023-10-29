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
//   console.log('Hello');
// }, 3000);

// function sync() {
//   console.log('Dream');
// }
// sync();

// console.log('Namaste');

// //---> PROMISE

const myPromise = new Promise(function (resolve, rejected) {
  setTimeout(function () {
    console.log('Your cake miss!!');
  }, 5000);
  resolve(12);
});

myPromise.then(value => {
  console.log(value);
});

// function cake() {
//   console.log('I ordered your cake');
// }
// cake();

// console.log('Your cake is on a way');

const newPromise = new Promise(function (resolve, rejected) {
  setTimeout(function () {
    console.log('I am coming');
  }, 6000);
  rejected(new Error('My bike got punchured'));
});

newPromise.catch(Error => {
  console.log('Received an error');
});

// function ride() {
//   console.log('Where are you?');
// }
// ride();
