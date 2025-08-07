// Comparators and Equality :
//          Comparators and equality operators in JavaScript are used to compare two values. These operators return a Boolean result (true or false) and are commonly used in control flow statements like if, while, and loops.

// Syntax :
// Comparators :
            a === b     // Strict equality including datatypes
            a == b      // Equality without including of datatypes
            a !== b     // Strict not equality including datatypes
            a != b      // Not equality without including datatypes
            a && b      // It runs both the condition mentioned
            a || b      // It runs either one of the mentioned

// Equality :
            a < b       // Lesser than
            a > b       // Greater than
            a <= b      // Lesser than equal to
            a >= b      // Greater than equal to

// For Example :

            var a = 100 * Math.random();
            var b = 100 * Math.random();
            var c = 100 * Math.random();
            var totalValue = (a + b)*2 - (22 + 78)*12 / 2
            if(a >= 80 && b >= 80 && c >= 80){
                console.log("'a' is dominant");
            }
            else if(a <= 30 && b <= 30 && c <= 30){
                console.log("'b' is dominant");
            }
            else{
                console.log("'c' is dominant");
            }