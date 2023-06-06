// index.js - lab 16: JSON and APIs  
// Author: Tory Swenson
// Date: 6/5/23

// Constants 

//Functions

//this is an example of a functiom 
function myFunction(param1, param2) {
  //some code here
  //return results;
}

$(document).ready(function() {

  const api_url ='https://api.nasa.gov/insight_weather/7api_key=DEMO_KEY&feedtype=json&ver=l.0'
  async function getInsight(){

    const response= await fetch(api_url); 
    const data = await response.json(); 
    console.log(data); 
    var sol = data.sol_keys[0]; 
    $('#output').append('<p>'+data.sol_keys+'<p>'); 
  }
  getInsight(); 
})
