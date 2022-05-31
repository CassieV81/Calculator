const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


function operate(num1, num2) {
    if (addValue.addEventListener) {
    return add(num1, num2);
    } else if (subtractValue.addEventListener) {
        return subtract(num1, num2);
    } else if (multiplyValue.addEventListener) {
        return multiply(num1, num2);
    } else if (divideValue.addEventListener) {
        return divide(num1, num2);
    }
}

const number = document.querySelectorAll('.number');
const display = document.getElementById('display');
const addValue = document.querySelector('.add');
const subtractValue = document.querySelector('.subtract');
const multiplyValue = document.querySelector('.multiply');
const divideValue = document.querySelector('.divide');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let value = '';
let num1 = 0;
let num2 = 0;


function populate() {
    number.forEach(number => {
        number.addEventListener('click', function() {
            value += number.textContent;
            display.textContent = `${value}`;
            console.log(num1 = Number(`${value}`));
        });
    })
}

function calculate() {
    addValue.addEventListener('click', () => {
        console.log(display.textContent = operate(num1, num2));
        console.log(num2 = Number(display.textContent));
        return value = '';
    })
    equals.addEventListener('click', () => {
        console.log(num1, num2)
        console.log(display.textContent = operate(num1, num2));
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
