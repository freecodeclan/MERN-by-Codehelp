'use strict';

const waada1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('I am waada1');
  }, 2000);
  resolve(true);
});
let output = waada1.then(function () {
  const waada2 = new Promise(function (resolve, reject) {
    resolve('I am in waada2');
  }, 3000);
  return waada2;
});
output.then(value => {
  console.log(value);
});

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const randomValue = Math.random();
    if (randomValue > 0.5) {
      resolve(randomValue);
    } else {
      reject(new Error('Random Value is too low'));
    }
  }, 1000);
});
myPromise
  .then(function (value) {
    console.log('Promise fulfilled with value: ' + value);
  })
  .catch(function (error) {
    console.error('Promise rejected with error: ' + error.message);
  });
