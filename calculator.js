let input = document.querySelector('#input');
let numberButton = document.querySelectorAll('.number');
let equalsButton = document.querySelector('#equals');
let deleteButton = document.querySelector('#delete');
let operationButton = document.querySelectorAll('.operation');

let currentInput = "0";
let currentOperation = null;
let previousInput = null;

numberButton.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput === "0") {
            currentInput = button.innerText;
        } else {
            currentInput += button.innerText;
        }
        input.innerText = currentInput;
    });
});

operationButton.forEach(button => {
    button.addEventListener("click", () => {
        currentOperation = button.innerText;
        previousInput = currentInput;
        currentInput = "0"; 
    });
});

equalsButton.addEventListener("click", () => {
    if (currentOperation && previousInput !== null) {
        const calculate = (operation, a, b) => {
            if (operation === "+") return a + b;
            if (operation === "-") return a - b;
            if (operation === "*") return a * b;
            if (operation === "/") {
                if (b !== 0 && a !==0) {
                    return a / b;                
                }else if (b === 0) {
                    return " error";
                }else if (a === 0) {
                    return 0;
                }
            }
            
        };
    
        const result = calculate(currentOperation, Number(previousInput), Number(currentInput));
        input.innerText = result;
        currentInput = result.toString();
        previousInput = null; 
        currentOperation = null; 
    }
});

deleteButton.addEventListener("click", () => {
    currentInput = "0";
    previousInput = null;
    currentOperation = null; 
    input.innerText = currentInput;
});

