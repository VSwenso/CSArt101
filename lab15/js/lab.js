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
  console.log("Main function started.");
  // the code that makes everything happen

  $(document).ready(function() {
    // Attach the click event handler to a parent element using event delegation
    $(document).on('click', '#activate', function() {
      var randomNumber = Math.floor(Math.random() * 1015) + 1;
      console.log('Clicked!');
      $.ajax({
        
        url: "https://pokeapi.co/api/v2/pokemon/"+randomNumber,
        type: "GET",
        dataType: "json",
        success: function(data) {
          // Actions to perform when the API call is successful
          console.log(data);
          // Process the received data or perform other tasks
          var name = data.name;
        var spriteURL = data.sprites.front_default;
        $('#output').append('<p>Name: ' + name + '</p>');
        $('#output').append('<img src="' + spriteURL + '" alt="Pokemon Sprite">');
        },
        error: function(jqXHR, textStatus, errorThrown) { 
          // Actions to perform when the API call fails
          console.log("Error:", textStatus, errorThrown);
          // Handle the error condition appropriately
        }
      });
    });
  });
}

main();
