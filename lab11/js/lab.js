// index.js - lab 11: Libraries &jQuery 
// Author: Tory Swenson
// Date: 5/17/23

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

  $(document).ready(function() { //creates and appends button to challenge sect.
    var ChallengeButton = $('<button>', {
      id: 'challengeButton', 
      text: 'Challenge Button'
      });
      ChallengeButton.click(function(){
        alert('Challenge Time!') //action goes right here
    }); 
  
    $('#challenge').append(ChallengeButton); 
   
  //creates and appends button for problems sect.
    var ProblemsButton = $('<button>', {
      id: 'probButton', 
      text: 'Problems Button'
      });
      ProblemsButton.click(function(){
        alert('Zoinks, Problems!') //action goes right here
    }); 
    $('#problems').append(ProblemsButton); 
  
  //creates and appends button for reflections sect
    var ReflectionButton = $('<button>', {
      id: 'reflectionButton', 
      text: 'Reflection Button'
      });
      ReflectionButton.click(function(){
        alert('Wee Reflection!') //action goes here
    });
      $('#reflection').append(ReflectionButton); 
  }); 

}

main();
