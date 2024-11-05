// //TASK 1 

const greet =(name) => `Hello, ${name}!`;

//console.log(greet("Bashayer"));

// //TASK 2 
// // Write a simple arrow function that takes two parameters and returns their sum.

// // function add(a,b){
// //     const result = a+b;
// //     return result
// // };
// // const result =add(3,7)
// // console.log(result);

const add = (a, b) =>  a + b;
    //console.log (3+7);

// //TASK 3
// // Write a simple arrow function that squares a number.

// // square (a,b) => result
// // const square= function (firstNum){
// //     return firstNum * firstNum;
// // };
// // console.log (square(3));

const squareNum = (number) => number * number;
   // console.log (squareNum (3));


// //Challenge
// //[]Create an arrow function that takes an array of numbers and returns a new array with each number squared.

const numbers = [1,2,3,4,5];
// square = numbers.map (function(number) {
//     return number * number;
// });

const square = numbers.map((number) => number * number);
//console.log(square);


