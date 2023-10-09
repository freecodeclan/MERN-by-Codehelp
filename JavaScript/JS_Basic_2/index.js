//- Object Creation

/* let rectangle = {
  length: 1,
  breadth: 2,
  //- Adding method inside object
  draw: function () {
    console.log('Drawing Rectangle');
  },
}; */

/* Factory Function 

//-- Non-Parameter
function createRectangle() {
  return (rectangle = {
    length: 1,
    breadth: 2,
    //- Adding method inside object
    draw: function () {
      console.log('Drawing Rectangle');
    },
  });
}

let rectangleObj1 = createRectangle();
console.log(rectangleObj1);

//- Parameter Function
function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,

    getfullName() {
      return firstName + '' + lastName;
    },
  };
}

let person_1 = createPerson('Harsh', 'Mehra');
console.log(person_1); */

//--Constructor Function

//-- Non-Parameter Function
function Square() {
  (this.length = 5),
    (this.breadth = 10),
    (this.draw = function () {
      console.log('Drawing');
    });
}

let Square1 = new Square();
console.log(Square1);

Square1.draw();

//- Parameter Function
function Person(first_Name, last_Name) {
  (this.first_Name = first_Name),
    (this.last_Name = last_Name),
    (this.Fullname = function () {
      console.log('FullName');
    });
}

let Person_1 = new Person('Juhi', 'Chellani');
console.log(Person_1);

//-- Dynamic Nature of Object (Addition and Deletion of Properties)
Person_1.age = 29; // Adding new property to object
delete Person_1.age; // Deletion from object
delete Person_1.first_Name;

//- Reference Variable
let a = { value: 10 };

function inc(a) {
  a.value++;
}

inc(a);
console.log(a.value);

/* Iterating through Objects 

1 -- For-in Loop */

//- Object
let rectangle = {
  length: 5,
  breadth: 10,
};

//- Now iterating through for-in loop
for (let key in rectangle) {
  console.log(key);
}

//- Object
let square = {
  len: 10,
  width: 20,
};

for (let key in square) {
  console.log(key, square[key]); //- Here now accessing key & value both using bracket notation
}

//- For-of Loop
for (let key of Object.keys(rectangle)) {
  console.log(key); //- Object.keys used to print only keys of iterables.
}

for (let key of Object.entries(square)) {
  console.log(key); // Object.enteries used to print keys and values of iterables.
}

//- We use if else statement to find any property present or absaent in any object.
if ('age' in square) {
  console.log('Present');
} else {
  console.log('Absent');
}

/* OBJECT CLONING */

//- Using Iteration function
let src = {
  a: 10,
  b: 20,
  c: 30,
};

for (let key in src) {
  console.log(key, src[key]); //- Iterating key & values of src
}
let dest = {}; //-  Creating an Empty Object

for (let key in src) {
  dest[key] = src[key];
} //- Cloning src key & values into empty object

console.log(dest);

//- Using Assign function to clone the object

let nat = Object.assign({}, src); //- Cloning keys and values from src to empty object {} by using Object.assign
console.log(nat);

//- Using Spread function

let ion = { ...src }; //- Cloning keys and values from src to empty object {} by using ... (3 dots)
console.log(ion);
