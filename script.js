const number = document.querySelectorAll('.number');
const display = document.getElementById('display');
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (a / b).toFixed(6);

function operate(num1, num2, operator) {

    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === 'x') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else {
        return;
    }
}

let displayValue = '';
let num1 = '';
let num2 = '';
let op = '';
let result = '';


function populate() {
    number.forEach(number => {
        number.addEventListener('click', function (e) {
            displayValue += e.target.value;
            displayScreen(displayValue);
            if (op === '+' || op === '-' || op === 'x' || op === '/') {
                if (result !== '') {
                    num1 = Number(result)
                }
                num2 = Number(displayValue);
                displayScreen(num2);
                result = operate(num1, num2, op);
            } else { 
                num1 = Number(displayValue);
            }
        });
    })
}

operators.forEach(operators => {
    operators.addEventListener('click', (e) => {
        op = e.target.textContent;
        displayValue = Number(result);
        if (displayValue === 0) {
            displayScreen(num1)
        } else {
            displayScreen(displayValue)
        }
        displayValue = ''
    });
})

function calculate() {
    
    equals.addEventListener('click', () => {
    (result = operate(num1, num2, op));
    displayScreen(result);
    return num1 = result;
    })
}

function displayScreen(toScreen) {
        display.innerHTML = toScreen;
}

function clearDisplay() {
    clear.addEventListener('click', () => {
        displayScreen('0');
        displayValue = '';
        num1 = '';
        num2 = '';
        result = '';
    });
}
function deleteValue() {
    del.addEventListener('click', () => {
        value = `${displayValue}`
        value = value.slice(0, -1);
        displayValue = Number(`${value}`);
        num1 = Number(`${value}`);
        num2 = Number(`${value}`);
        displayScreen(displayValue);
    });
}

clearDisplay();
deleteValue();
calculate();
populate();
