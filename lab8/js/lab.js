// index.js - lab 8: Anon Functions and Callbacks
// Author: Tory Swenson
// Date: 5/7/23

// Step 1: create an array of numbers 
var numbers = [2, 4, 6, 8, 10]; 

// Step 2: create a named function
function square(x) {
  var result = x * x; 
  return result;
}

//Step 3: test the function 
console.log(square(2)); //output: 4 
console.log(square(5)); //output: 25
console.log(square(8)); //output: 64

//Step 4: Use map with your function as a callback 
var squaredNumbers = numbers.map(square);
console.log(squaredNumbers); //output: [4, 16, 36, 64, 100]

//Step 5: use an anonymous function as a callback 
var cubedNumbers = numbers.map(function(x){
  return x * x * x;
});
console.log(cubedNumbers); //output: [8, 64, 216, 512, 1000]