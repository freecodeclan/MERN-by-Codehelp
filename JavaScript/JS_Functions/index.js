'use strict';

/* FUNCTIONS */

// 1--> DECLAREATION
function run() {
  console.log('Go run 🏃‍♂️');
}
//--> Invoking / Calling function
run();

//- 2--> FUNCTION ASSIGNMENT

//-- Named function Assignment
let skill = function walk() {
  console.log('Walking 🚶‍♂️');
};
//--> Invoking named function assignment
skill();

//-- Anonymous function assignment
let talent = function () {
  console.log('Dancing 💃');
};
//--> Invoking function assignment
talent();

function sum(a, b) {
  console.log(arguments);
  return a + b;
}

let total = sum(2, 5, 6, 8, 12);

//--> Dynamic Function where we can give multiple parametrs
function sum(x, y) {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}

let ans = sum(2, 2, 4, 6, 8);
console.log(ans);

/* REST OPERATOR */
function sum(num, ...args) {
  console.log(args);
}

sum(1, 2, 3, 4, 5);

//- DEFAULT PARAMETER
function intrest(p, r = 2, y = 2) {
  return p * r * y;
}
console.log(intrest(10, 5));

//--> getter() & setter()
let person = {
  fName: 'Harsh',
  lName: 'Mehra',
  get fullName() {
    return `${person.fName} ${person.lName}`;
  },
  set fullName(value) {
    if (typeof value !== 'string') {
      throw new Error('You have not sent a string');
    }
    let parts = value.split(' '); //--> split() is used to make parts
    this.fName = parts[0];
    this.lName = parts[1];
  },
};

//--> Try & Catch (Error Handling)
try {
  person.fullName = 'Harsh Mehra';
} catch (e) {
  console.error(e.message);
}
console.log(person.fullName);

//--> SCOPING

// for (let i = 1; i <= 10; i++) {
//   // console.log(i);
// }

//--> Reducing an array

let ar = [-1, -2, -3, -4, -5];
// let add = 0;

// for (let value of ar) {
//   add += value;
// }
// console.log(add);
let totalSum = ar.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(totalSum);
