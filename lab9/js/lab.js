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
  console.log("Main function started,"); 
  // the code that makes everything happen 
  var outputEl = document.getElementById("output"); 
  console.log("outputEl: ", outputEl);

  var new1El = document.createElement("p");

  new1El.innerHTML = "something new."; 
  new1El.id = "new-one"; 

  var new2El = document.createElement("p"); 
  new1El.id = "new-two"; 

  new2El.innerHTML = "something else."; 

  outputEl.appendChild(new1El); 
  outputEl.appendChild(new2El); 

    document.getElementById("box"). 
        style.marginLeft = "40px"; 
    
    var bioEl = document.getElementById("bio"); 
    bioEl.style.color = "red"; 

}


main();
