// Switch Statement :
// switch is like an organized chain of if...else if...else.
// It checks a value against multiple possible matches (cases) and runs the code for the first match.

// Syntax :
switch (expression) {
    case value1:
        // Code if expression === value1
        break;

    case value2:
        // Code if expression === value2
        break;

    default:
        // Code if no cases match
}

// For Example :

let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Bananas are yellow!");
        break;
    case "apple":
        console.log("Apples are red or green!");        // output
        break;
    case "orange":
        console.log("Oranges are orange!");
        break;
    default:
        console.log("I don't know that fruit.");
}
