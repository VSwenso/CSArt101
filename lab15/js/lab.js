// index.js - lab 15: Ajax  
// Author: Tory Swenson
// Date: 5/31/23

// Constants 

//Functions

//this is an example of a functiom 
function myFunction(param1, param2) {
  //some code here
  //return results;
}

function main() {
  console.log("Clicked!"); 
  $.ajax({
    url: "https://swapi.dev/api/", 
    type: "GET", 
    data: {}, 
  })
  .done(function(data) {
    console.log(data); 
    var answer = data.answer; 
    var imgURL = data.image; 
    $("#output").html("<h2>" + answer); 
    $("#output").append("<img src=" + imgURL + ">"); 
  })
}
$("button").click(getStuff); 
main();
