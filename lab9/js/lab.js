// index.js - lab 9: JavaScript for the Web
// Author: Tory Swenson
// Date: 5/10/23

// Constants 

//Functions

//this is an example of a functiom 
function myFunction(param1, param2) {
  //some code here
  //return results;
}

function main() {
//Step 1
  const outputEl = document.getElementById("output"); 

//Step 2
  const new1El = document.createElement("p"); 

//Step 3
  new1El.innerHTML = "This is the new content of new1El"; 

//Step 4
  const new2El = document.createElement("p"); 

//Step 5
  new2El.innerHTML = "this is the new content of new2El"; 

//Step 6 
  outputEl.appendChild(new1El); 
  outputEl.appendChild(new2El); 

//Step 7
//Change the background color of outputEl
  outputEl.style.backgroundColor = "lightblue"; 

//change the font color of new1El
  new1El.style.color = "red"; 

}


main();
