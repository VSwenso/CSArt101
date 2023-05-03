// index.js - lab 7: functions 
// Author: Tory Swenson
// Date: 5/2/23

// sortUserName - a funstion that takes user input and sorts the letters
// of their name 
function sortUserName() {
  const userName = window.prompt("Please tell me your name:"); 
  const sortedName = userName.split("").sort().join(""); 
  return sortedName;
}

//output
const sortedUserName = sortUserName();
document.writeln("Your sorted name is: " + sortedUserName);

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
