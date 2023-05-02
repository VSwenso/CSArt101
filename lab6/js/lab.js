// index.js - lab 6: Arrays and Objects 
// Author: Tory Swenson
// Date: 5/1/2023

// Define Variables 
myTransport = ["Boyfriends car", "bus", "walking", "uber"];

// create an object for my main ride
myMainRide = {
    make : "Mazda", 
    model : "Miada", 
    color : "red", 
    year : 1990, 
    // we can define a function within our object (called a method)
    //that uses the value of year above (using this.year)
    age : function() {
        return 2023 - this.year; 
    }
}

// output
console.log(myBike)

console.log(myTransport)

document.writeln("Transportion Type:", myTransport, "</br>");
// This little trick allows us to write an object into the document
document.writeln("My Main Ride: <pre>"
  JSON.stringify(myMainRide, null, '\t'), "</pre>"); 