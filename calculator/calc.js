/*
Need all the operations in a regular calculator
Let's start with add/subtract/multiply/divide

Each operation: consists of a number, an operator, and another number
*/

function add(a, b) {
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, a, b){
    switch (operator){
        case "+":
            add(a,b);
        case "-":
            subtract(a,b);
        case "*":
            multiply(a,b);
        case "/":
            divide(a,b);
        default:
            alert("Not a valid operator")
    }
}

