// Constructor Function :
// A constructor function is a special kind of function used to create multiple objects with the same properties and methods quickly.

// Syntax :

function Nameoffunction(property1, property2) {
    this.property1 = property1;   // property
    this.property2 = property2;   // property
}

// For Example :

function Studentdata(name, age) {
    this.name = name;                           // property
    this.age = age;                             // property
    this.sayHello = function() {                // method
        console.log("Hi, my name is " + this.name);
    };
}

let person1 = new Studentdata("Karthi", 22);
let person2 = new Studentdata("Tony", 23);

person1.sayHello(); // Hi, my name is Karthi
person2.sayHello(); // Hi, my name is Tony
