const number = document.querySelectorAll('.number');
const display = document.getElementById('display');
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (a / b).toFixed(3);

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
            console.log(e.target.value);
            displayValue += e.target.value;
            console.log(displayValue)
            num1 = Number(num1)
            display.innerHTML = Number(displayValue);
            if (op === '+' || op === '-' || op === 'x' || op === '/') {
                num2 = displayValue;
                num2 = Number(num2)
                console.log(num1, op, num2)
                display.innerHTML = Number(num2);
                console.log(result = operate(num1, num2, op));
                num1 = result;
                display.innerHTML = result;
            } else {
                num1 = displayValue;
                num1 = Number(num1)
                console.log(num1, op, num1)
                display.innerHTML = Number(num1);
            }
        });
    })
}

operators.forEach(operators => {
    operators.addEventListener('click', (e) => {
        op = e.target.textContent;
        console.log(op);
        return displayValue = '';
    });
})

function calculate() {

    equals.addEventListener('click', () => {
        console.log(num1, num2)
        console.log(display.innerHTML = operate(num1, num2, op));
    })
}

function clearDisplay() {
    clear.addEventListener('click', () => {
        display.textContent = "0";
        displayValue = '';
        num1 = '';
        num2 = '';
    });
}
function deleteValue() {
    del.addEventListener('click', () => {
        value = `${displayValue}`
        value = value.slice(0, -1);
        displayValue = `${value}`;
        display.innerHTML = displayValue;
    });
}

clearDisplay();
deleteValue();
calculate();
populate();
