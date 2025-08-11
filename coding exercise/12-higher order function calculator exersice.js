// Higher order function calculator exercise :
//          In this exercise we are going to make a calculator by using higher order function giving arguments and gets the answer.

// Solution :

function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function calculator(num1,num2,operation){           // Higher order function used in this function
    return operation(num1,num2);
}