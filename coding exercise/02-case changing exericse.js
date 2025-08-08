// Get an input from user by prompt , from the user's input.
// We have to convert the input value in the form of 
//      - First letter must be in "uppercase".
//      - Remaining letters than first letter should be in "lowercase".
// Convert the value and pass it as the alert to the user.

// Solution :
var storeAge = prompt("What is your name?");        // Input (KARTHI)
var remainValue = storeAge.toLowerCase();
var firstValue = remainValue.slice(0,1);
var lastValue = remainValue.slice(1,100);
var secondValue = firstValue.toUpperCase();
alert("Hello "+ secondValue + lastValue);           // Output (Hello Karthi)