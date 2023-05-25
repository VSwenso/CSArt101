// index.js - lab 13: Loops  
// Author: Tory Swenson
// Date: 5/24/23

// Constants 

//Functions

//this is an example of a functiom 
function myFunction(param1, param2) {
  //some code here
  //return results;
}

function main() {
  console.log("Main Function started."); 
  // the code which makes stuff happen
  function FizzBuzz(){
    var oneLongString= ''; 
    for(var i=0;i<200;i++){
      var num=i; 
      oneLongString+=num; 
      if (i %3==0){
        oneLongString+='Fizz';
      }
      if (i %5==0){
        oneLongString+='Buzz';
      }
      if (i %7==0){
        oneLongString+='Boom'; 
    }
    oneLongString+='<br>'; 
  }
  $('#output').append('<p>'+oneLongString+'</p>'); 
}}

main();
