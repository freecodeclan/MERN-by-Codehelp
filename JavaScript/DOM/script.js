'use strict';

// function handleClick() {
//   console.log('You just clicked the screen');
// }

// //--> addEventListener() method
// document.addEventListener('click', handleClick);

// //--> removeEventListener() method
// document.removeEventListener('click', handleClick);

// let content = document.querySelector('#wrapper');
// content;

// content.addEventListener('click', function (harsh) {
//   console.log(harsh);
// });

//--> Using .preventDefault() Method

// let link = document.querySelectorAll('a');
// let thirdLink = link[1];
// thirdLink.addEventListener('click', function (event) {
//   event.preventDefault();
//   console.log('MazaAayya');
// });

/*  Avoiding too many Events */

//->Part-1
let myDiv = document.createElement('div');

function paraStatus(event) {
  console.log('Para ' + event.target.textContent);
}
myDiv.addEventListener('click', paraStatus);

for (let i = 1; i <= 10; i++) {
  let newElement = document.createElement('p');
  newElement.textContent = 'This is para' + i;

  myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

//-->Part-2
let myArticle = document.querySelector('#wrap');

myArticle.addEventListener('click', function (event) {
  if (event.target.nodeName === 'SPAN') {
    console.log('Maine span tag pae click kiya hai' + event.target.textContent);
  }
});
