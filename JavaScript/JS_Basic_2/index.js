//- Object Creation

// let rectangle = {
//   length: 1,
//   breadth: 2,
//   //- Adding method inside object
//   draw: function () {
//     console.log('Drawing Rectangle');
//   },
// };

//- Factory Function
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
