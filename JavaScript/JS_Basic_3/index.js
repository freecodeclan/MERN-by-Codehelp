/* IN-BUILT OBJECT */

//-- MATH
console.log(Math.random()); //-- Math.random() method generate random number from 0 - 1.

console.log(Math.PI); //-- Used for PI values

console.log(Math.round(2.4)); //-- Math.round() method used to round off the number
console.log(Math.round(3.7));

console.log(Math.max(2, 6, 10, 8)); //- Math.max() method used to find maximum number
console.log(Math.min(2, 6, 10, 8)); //- Math.min() method used to find minimum number

//-- STRING
let lastName = 'Mehra'; //- This is string as premitive

let firstName = new String('Harsh'); //- This is string as Object

console.log(typeof lastName);
console.log(typeof firstName);

console.log(lastName.length); //- By using .dot notation we can convert primitive string into Object String

/* Coverting sentence into Array Object */
let message = 'I am the best software developer';

let words = message.split(' '); //-- '' notation used to create space

console.log(words);
console.log(typeof words);

console.log(lastName.indexOf('h'));

//-- TEMPLATE LITERALS

let newMessage = `I am the 
best software
developer`;
console.log(newMessage);

//- DATE & TIME

let date = new Date();
console.log(date);

let date1 = new Date(1992, 5, 5, 8.04);
console.log(date1);
