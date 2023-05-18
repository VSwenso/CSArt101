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

  $(document).ready(function() { //creates and appends button to the challenge section (first section)
    var ChallengeButton = $('<button>', {
      id: 'challengeButton', 
      text: 'Challenge Button'
      });
      ChallengeButton.click(function(){
        alert('Challenging Stuff!') //action 
    }); 
  
    $('#challenge').append(ChallengeButton); 
   
  //creates and appends button for problems section
    var ProblemsButton = $('<button>', {
      id: 'probButton', 
      text: 'Problems Button'
      });
      ProblemsButton.click(function(){
        alert('Zoinks, Problems!') //action 
    }); 
    $('#problems').append(ProblemsButton); 
  
  //creates and appends button for results section 
    var ResultsButton = $('<button>', {
      id: 'resultsButton', 
      text: 'Results Button'
      });
      ResultsButton.click(function(){
        alert('Wee Results!') //action
    });
      $('#results').append(ResultsButton); 
  }); 



}

main();
