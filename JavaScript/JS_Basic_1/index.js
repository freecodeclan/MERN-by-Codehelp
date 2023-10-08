console.log('Hello Bhai Kaisa Hai 1');

let a = 5;

console.log(a);

const num = 12;
// num = 13;

let first_name = 'Harsh';
console.log(first_name);

first_name = 2;
console.log(first_name);

let persaon = ['Harsh', 31, true];
console.log(persaon[2]);
persaon[3] = 'Mom';
console.log(persaon[3]);

//- Arithmetic Operator
console.log(2 + 3);

console.log(10 - 5);

console.log(10 * 5);

console.log(20 / 2);

console.log(12 % 5);

console.log(2 ** 3);

let x = 10;
console.log(++x);
console.log(x++);
console.log(x);
console.log(--x);
console.log(x--);
console.log(x);

//- Comparison Operator
console.log(5 > 3);
console.log(10 < 8);
console.log(2 === 2);
console.log(4 !== 4);

//- Strict Equality (===) & Loose Equality (==)
let n = 1;
let str = '1';
console.log('Loose Equality: ' + (n == str));
console.log('Strict Equality: ' + (n === str));

//- Ternary Operator
let age = 18;
let vote = age >= 18 ? 'I can Vote' : 'I cannot vote';
console.log(vote);

//- Logical Operator with Non-Boolean Values work on falsy and truthy values
console.log(true || true);
console.log(true || false);
console.log(false || 'Harsh');
console.log(false || 1);
console.log(false && 'Harsh');

//- OR Operator Short Circuiting
console.log(false || 5 || 1);

//- Control Statements
let marks = 88;
//- If elseif else Statement
if (marks >= 90) {
  console.log('Grade A');
} else if (marks >= 80) {
  console.log('Grade B');
} else if (marks >= 70) {
  console.log('Grade C');
} else {
  console.log('Grade D');
}

//- Switch Statement
let h = 2;

switch (num) {
  case 1:
    console.log('A');
    break;

  case 2:
    console.log('B');
    break;

  case 3:
    console.log('C');
    break;
}

for (let i = 0; i <= 5; i++) {
  console.log(i);
}
