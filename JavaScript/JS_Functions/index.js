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
//--> Invoking function assignment
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

let total = sum(2, 5);

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
function sum(...args) {
  console.log(args);
}

sum(1, 2, 3, 4, 5);
