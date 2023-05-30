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
  console.log("Main function started."); 
  //the code that makes stuff happn
  var outputEl = document.getElementById('output'); 
  var field = document.createElement('input'); 
  var buttonEl = document.createElement('button'); 
  var Name = document.createElement('div');

  field.type = 'text'; 
  field.id = 'input'; 

  buttonEl.innerHTML = 'Sort the Letters in Name'

  buttonEl.setAttribute('id', 'my-button'); 

  outputEl.appendChild(field); 
  outputEl.insertBefore(buttonEl, field.nextSibling); 
  outputEl.insertBefore(Name, buttonEl.nextSibling); 


  buttonEl.addEventListener('click', function() {
  Name.innerHTML ='Sorted username is: '+field.value.split('').sort().join(''); 

  })
  }

main();
