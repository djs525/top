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

const numButtons = document.querySelectorAll('.nums')
const opButtons = document.querySelectorAll('.ops')
const equalsButton = document.querySelector('.equal')
const screen = document.querySelector('.screen')
const allClear = document.querySelector('.all-clear')
let screenOutput = screen.textContent
let firstNum, secondNum, operator;
let startFresh = false;


numButtons.forEach(numButton => {
    numButton.addEventListener('click', () => {
        if (startFresh){
            screenOutput = numButton.textContent;
            startFresh = false;
        } else if (screenOutput === "0"){
            screenOutput = numButton.textContent
        } else{
            screenOutput += numButton.textContent
        }

        // display: if we're mid-expression, show "5+4"; otherwise just the number
        if (operator) {
            screen.textContent = firstNum + operator + screenOutput
        } else {
            screen.textContent = screenOutput
        }
    })
})

function opHandler(firstNum, operator, secondNum){
    switch (operator){
        case "+":
            return parseInt(firstNum) + parseInt(secondNum)
        
        case "-":
            return parseInt(firstNum) - parseInt(secondNum)
        
        case "x":
            return parseInt(firstNum) * parseInt(secondNum)

        case "÷": return secondNum === 0 ? "ERROR" : parseFloat(firstNum) / parseFloat(secondNum)

        case "%": return parseFloat(firstNum) % parseFloat(secondNum)
    }
}

opButtons.forEach(opButton => {
    opButton.addEventListener('click', () => {
        firstNum = screenOutput          
        operator = opButton.textContent
        startFresh = true
        screen.textContent = firstNum + operator 
    })
})
equalsButton.addEventListener('click', () => {
    if (!operator) return

    secondNum = screenOutput;
    const result = opHandler(firstNum, operator, secondNum);
    screen.textContent = result
    screenOutput = String(result)            // continue from the answer
    operator = undefined                     // clears the "mid-expression" state
    startFresh = true
})

allClear.addEventListener('click', () => {
    screen.textContent = "0"
    screenOutput = screen.textContent
    firstNum = secondNum = operator = ""
    startFresh = false;
})

/*
WHATS LEFT:-

`.` functionality
`C` functionality
Some Operator magic, eg. 120 + 60 = 180, then press `=` again, you get 240 (180 + 60)

*/