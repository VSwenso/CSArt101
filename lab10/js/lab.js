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
  function nameSort(str) {
      return str.split('').sport().join('');
  } 

  function anagram(str1, str2) {
      if (str1.length !== str2.length) {
          return false;
      }
      var sortedStr1 = str1.split('').sort().join(''); 
      var sortedStr2 = str2.split('').sort().join(''); 

      return sortedStr1 === sortedStr2
  }

  var button = document.createElement('button'); 
  button.textContent = 'Sort/Anagram'; 
  button.addEventListener('click', function() {
      var inputField = document.getElementById('input'); 
      var outputDiv = document.getElementById('output'); 
      var inputValue = inputField.value;

      //uncomment one of the following lines to use the nameSort or anagram() function. 
      // var sortedValue = nameSort(inputValue); 
      // var sortedValue = anagram(inputValue, 'listen'); 

      outputDiv.textContent = sortedValue; 
  });

  var inputField = document.createElement('input'); 
  inputField.type = 'text'; 
  inputField.id = 'input'; 

  var outputDiv = document.createElement('div'); 
  outputDiv.id = 'output'; 

  document.body.appendChild(inputField); 
  document.body.appendChild(button); 
  document.body.appendChild(outputDiv); 

}


main();
