// index.js - lab 12: Conditionals 
// Author: Tory Swenson
// Date: 5/22/23

// Constants 

//Functions

//this is an example of a functiom 
function myFunction(param1, param2) {
  //some code here
  //return results;
}

function main() {
  console.log("Main function Started."); 
  //the code that makes everything happen 
  function sortingHat(str) {
    len = str.length; 
    mod = len % 4; 
    if (mod == 0) {
      return "GRYFFINDOR"
    }
    else if (mod == 1) {
      return "RAVENCLAW"
    }
    else if (mod == 2) {
      return "SLYTHERIN"
    }
    else if (mod == 3) {
      return "HUFFlePUFF"
    }
  }

  var myButton = document.getElementById("button"); 
  myButton.addEventListener("click", function() {
      var name = document.getElementById("input").value; 
      var house = sortingHat(name); 
      newText = "<p> The Sorting Hat has placed you into " + house + "</p>"; 
      document.getElementById("output").innerHTML = newText; 
  })

}

main();
