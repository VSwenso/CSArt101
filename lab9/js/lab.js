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
    var outputE1 = document.getElementById("div");
    var newE1 = document.createElement("p")
    newE1.style.color("purple");
    newE1.innerText("FOR REAL!?");
    
    var newE2 = document.createElement("p");
    newE2.innerText("PERSONA 5");
    
    outputE1.appendChild(newE1);
    outputE1.appendChild(newE2);

    /*targetEl.appendChild(newEl);
    var buttonElement = document.createElement("button"); 
    buttonElement.id = "button"
    buttonElement.innerHTML = "I have brought peace, freedom, justice, and security to my new empire!"; 
    document.body.appendChild(buttonElement); 

    var newEl = document.createElement("div"); 
    targetEl2.appendChild(newEl2); 
    var resultsElement = document.createElement("Results"); 
    resultsElement.id = "Results"
    resultsElement.innerHTML = "For real!?"; */

    document.getElementById("box"). 
        style.marginLeft = "40px"; 
    
    var bioEl = document.getElementById("bio"); 
    bioEl.style.color = "red"; 

}


main();
