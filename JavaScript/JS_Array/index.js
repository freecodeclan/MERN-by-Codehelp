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
