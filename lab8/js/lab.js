// index.js - lab 8: Anon Functions and Callbacks
// Author: Tory Swenson
// Date: 5/7/23

// Step 1: create an array of numbers 
var numbers = [1, 4, 9, 16, 25]; 

// Step 2: create a named function
function square(x) {
  var result = x * x; 
  return result;
}

//Step 3: test the function 
console.log(square(5)); //output: 25
console.log(square(10)); //output: 100

//Step 4: Use map with your function as a callback 
var squareResults = numbers.map(square);
console.log(squareNumbers); //output: [1, 16, 81, 256, 625]

//Step 5: use an anonymous function as a callback 
var cubeResults = numbers.map(function(x) {
  var result = x * x * x; 
  return result; 
});
console.log(cubeResults); //output: [1, 64, 729, 4096, 15625]