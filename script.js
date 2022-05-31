const number = document.querySelectorAll('.number');
const display = document.getElementById('display');
const addValue = document.querySelector('.add');
const subtractValue = document.querySelector('.subtract');
const multiplyValue = document.querySelector('.multiply');
const divideValue = document.querySelector('.divide');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let value = '';
let num1 = 0;
let num2 = 0;




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

console.log(operate(10, 2, '/'))

function populate() {
    number.forEach(number => {
        number.addEventListener('click', function () {
            value += number.textContent;
            display.textContent = `${value}`;
            console.log(num1 = Number(`${value}`));
        });
    })
}
console.log(num1 = Number(`${value}`));

function calculate() {
    addValue.addEventListener('click', () => {
        console.log(display.textContent = operate(num1, num2, addValue.textContent));
        console.log(num2 = Number(display.textContent));
        return value = '';
    })
    equals.addEventListener('click', () => {
        console.log(num1, num2)
        console.log(display.textContent = operate(num1, num2, addValue.textContent));
    })
}



function clearDisplay() {
    clear.addEventListener('click', () => {
        display.textContent = 0;
        value = '';
        num1, num2 = '';
    });
}

clearDisplay();
calculate();
populate()

