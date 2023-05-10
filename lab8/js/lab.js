// index.js - lab 8: Anon Functions and Callbacks
// Author: Tory Swenson
// Date: 5/7/23

// Constants 

//Functions

//this is an example of a functiom 
function myFunction(param1, param2) {
  //some code here
  //return results;
}

function main() {
  console.log("Main function started."); 
  var someArray = [100, 10, 200, 300]; //an array
  console.log(someArray); //printing the array

  function addOne(x){//anonymous function
    var results = x+1
    return results; 
}
  console.log(someArray.map(addOne)); //printed results
                                      //function action 

  console.log(someArray.map(function(x){ //printed results 
  return x*2;                            //on an array
}))

}


main();
