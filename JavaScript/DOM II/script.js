'use strict';
//--> Adding 50 para --- Code 1
// const t1 = performance.now();
// for (let i = 1; i <= 50; i++) {
//   let newElement = document.createElement('p');
//   newElement.textContent = 'This is para' + i;

//   document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log('This took ' + (t2 - t1) + 'ms');

// //---> Optimising upper code a bit --- Code 2

// const t3 = performance.now();

// let myDiv = document.createElement('div'); //-- Creating div here

// //-- By using looping creating new <p> element and adding this element into myDiv.
// for (let i = 1; i <= 50; i++) {
//   let element = document.createElement('p');
//   element.textContent = 'This is para' + i;

//   myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);

// const t4 = performance.now();

// console.log('This took ' + (t4 - t3) + 'ms');

// //---> Now optimising upper code using fregment --- Code 3

// let tt1 = performance.now();
// let fregment = document.createDocumentFragment();
// for (let i = 1; i <= 50; i++) {
//   let newElement = document.createElement('p');
//   newElement.textContent = 'This is the best practice' + i;

//   fregment.appendChild(newElement);
// }
// document.body.appendChild(fregment);
// let tt2 = performance.now();

// console.log('This took ' + (tt2 - tt1) + 'ms');

// function a() {
//   console.log('Hello');
// }

// function b() {
//   console.log('Hi');
// }

// a();
// b();
