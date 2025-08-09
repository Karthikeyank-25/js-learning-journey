// Arrays :
//      -The array is also a variable,but it is special varaiable.
//      -It is used store multiple values within that array.
//      -It also stores different datatypes within it.
//      -It also mentioned inbetween of square brackets.

// Syntax :
        var arrayName = [];

// For Example :
        var fruitName = ["Apple","Orange","Banana","Gova"];

// Methods :
        fruitName.includes("Banana");   // check values
        fruitName.indexOf("Gova");      // find index value
        fruitName.push("Mango");        // add at the end
        fruitName.pop();                // remove from end
        fruitName.unshift("Papaya");    // add at start
        fruitName.shift();              // remove from start
        fruitName.length();             // find the length
        fruitName.splice();              // (start index value , no of values from index , replacing value for that index postion)
        fruitName.slice();              // cut the specific values (start,end)
