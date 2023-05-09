// index.js - lab 8: Anon Functions and Callbacks
// Author: Tory Swenson
// Date: 5/7/23

// Step 1: create an array of numbers 
var numbers = [100, 81, 1, 16, 42, 144, 10000]; 

// Step 2: create a named function
function squareRoot(x) {
  var result = Math.sqrt(x);
  return result;
}

//Step 3: test the function 
console.log(squareRoot(16)); //output: 4 
console.log(squareRoot(25)); //output: 5

//Step 4: Use map with your function as a callback 
var squareRootResults = numbers.map(squareRoot);
console.log(squareRootResults); //output: [10, 9, 1, 4, 6.4, 12, 100]

//Step 5: use an anonymous function as a callback 
var cubeResults = numbers.map(funtion(x) {
  var result = Math.pow(x, 3); 
  return result;
});
console.log(cubeResults); //output: [1000000, 531441, 1, 4096, 74088, 2985984, 1000000000000]

//Step 6: display teh cubeResults array in an HTML document
document.write("<p> Cube results:</p>"); 
document.write("<ul>"); 
for (var 1 = 0; i = cubeResults.length; i++) {
  document.write("<li>" + cubeResults[i] + "</li>");
}
document.write("</ul>"); 