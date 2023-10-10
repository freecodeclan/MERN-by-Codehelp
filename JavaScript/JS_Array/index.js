/* ARRAY's */

//-- Creation of an Array
let number = [1, 4, 5, 7];
console.log(number);

//- INSERTION IN ARRAY

number.push(9); //--Inserting an element in End of array
console.log(number);

number.unshift(8); //- Inserting an element in begining
console.log(number);

number.splice(3, 0, 12); //--- Inserting an element in middle (index_value, deletion count, value_to_insert)
console.log(number);

//-- SEARCHING IN ARRAY
console.log(number);

console.log(number.indexOf(12)); //- .indexof(value) used to find the index value of element

console.log(number.includes(5)); //- .includes(value) used to check that element is present or absent in an array

console.log(number.indexOf(4, 3));

/*SEARCHING ON REFERENCES / OBJECTS */

//- Creating Array as an Object
let courses = [
  { no: 1, name: 'Harsh' },
  { no: 2, name: 'Manna' },
];
console.log(courses);

//- Using Callback function to Search in an Array Object
let course = courses.find(function (course) {
  return course.no === 1;
});
console.log(course);

//- Now to make more readable to above notation we use =>(Arrow function)
let cours = courses.find(cours => cours.name === 'Manna');
console.log(cours);

//-- REMOVING AN ELEMENT FROM ARRAY

let arr = [2, 4, 6, 1, 5, 8];
console.log(arr);

arr.pop(); //-- .pop() method used to remove from last
console.log(arr);

arr.shift(); //-- .shift() method used to remove starting
console.log(arr);

arr.splice(1, 1); //-- .splice() used to remove from middle
console.log(arr);

//--EMPTYING AN ARRAY
let newArr = [1, 2, 3, 4, 5, 6];
newArr1 = newArr;

// newArr.length = 0; //- array_name.length() used to empty an array

newArr.splice(0, newArr.length); //- Second method to empty an array

console.log(newArr);
console.log(newArr1);

/* COMBINING & SLICING AN ARRAY */

//-Combining
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

let jtArr = arr1.concat(arr2); // Using .concat() function to combine two arrays
console.log(jtArr);

//-Slicing
let slice = jtArr.slice(2, 6);
console.log(slice);

//--> SPREAD OPERATOS

let first = [1, 2, 3, 4];
let second = [5, 6, 7, 8];

let third = [...first, 'h', ...second, 'm'];
console.log(third);

/* ITERATING OR TRAVEL AN ARRAY */
let array = [10, 20, 30, 40, 50];

let array1 = [2, 6, 8, 10, 12];

let array2 = [3, 5, 7, 9, 11];

//- Using for of loop
for (let key of array) {
  console.log(key);
}

//- Using foreach loop
array1.forEach(function (value) {
  console.log(value);
});

//- Using => (arrow function) to make forEach loop more readable
array2.forEach(number => console.log(number));

//--> JOINING AN ARRAY
let new_arr = [10, 20, 30, 40, 50];
let join = new_arr.join();
console.log(join);

//--> SPLITING AN STRING
let message = 'I am the best software developer';
console.log(typeof message);

let newMsg = message.split(' ');
console.log(newMsg);
console.log(typeof newMsg);

/* SORTING AN ARRAY */
let num = [50, 20, 10, 60, 40];
num.sort();
console.log(num);

//--> Now reversing sorted array in descending order
num.reverse();
console.log(num);

//--> FILTERING AN ARRAY
let no = [1, 2, 4, -7, -1, -5];

let filtered = no.filter(function (value) {
  return value <= 0;
});

console.log(filtered);

//- Now making upper code more readable by using => arrow function.
let num_1 = [-1, -3, -9, 0, 1, 5];
let filter = num_1.filter(value => value < 0);
console.log(filter);

/* MAPPING ARRAYS */

let abc = [1, 2, 3, 4];
let items = abc.map(function (value) {
  return 'A B C' + ' ' + value;
});

console.log(items);

//-- Making code more readable by using => arrow function
let abcd = [5, 6, 7, 8];
let mapping = abcd.map(key => 'A B C D ' + key);
console.log(mapping);

//--> Mapping with Object
let ar = [1, 3, 5, -2, -5];
let flt = ar.filter(key => key >= 0);
console.log(flt);
let item = flt.map(function (num) {
  return { value: num };
});
console.log(item);

//- Now making code more readable
let br = [2, 5, 6, -1, -4, -2];
let ftr = br.filter(value => value >= 0);
console.log(ftr);

let item1 = ftr.map(num => ({ value: num }));
console.log(item1);

//--> Chaining the array with objects
let item2 = br.filter(value => value <= 0).map(num => ({ value: num }));
console.log(item2);
