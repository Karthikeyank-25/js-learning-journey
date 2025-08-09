// The Fibonacci Exercise :

// Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// Where every number is the sum of the two previous ones.

//e.g. 0, 1, 1, 2, 3, 5 comes from

1 = 0 + 1 
2 = 1 + 1 
3 = 1 + 2 
5 = 2 + 3 

// Create a function where you can call it by writing the code:
// fibonacciGenerator (n)
// Where n is the number of items in the sequence.
// So I should be able to call:
// fibonacciGenerator(3) and get

[0,1,1] //the output.

// Solution :

var sequence = [];
function fibonacciGenerator(n){
    if(n===1){
        sequence = [0];
        return sequence;
    }
    else if(n===2){
        sequence = [0,1];
        return sequence;
    }
    else{
        var i;
        sequence = [0,1];
        for(i=2;i<n;i++){
            sequence.push((sequence[sequence.length-2])+(sequence[sequence.length-1]));
        }
        return sequence;
    }
}

