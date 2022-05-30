const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
let num1, num2 = ''

function operate() {
    return add(num1, num2);
}

const number = document.querySelectorAll('.number');
const display = document.getElementById('display');
const addValue = document.querySelector('.add');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let value = '';


function populate() {
    number.forEach(number => {
        number.addEventListener('click', function() {
            value += number.textContent;
            display.textContent = `${value}`;
        });
    })
}
function clearDisplay() {
    clear.addEventListener('click', () => {
        display.textContent = '';
        value = '';
    });
}
function calculate() {
    addValue.addEventListener('click', function() {
        console.log(num1 = Number(display.textContent));
        return value = '';   
    });
    equals.addEventListener('click', function() {
        console.log(num2 = Number(display.textContent));
        console.log(num1, num2)
        display.textContent = operate(num1, num2);
    });
}
clearDisplay();
calculate();


populate()
console.log(`${value}`);


console.log(operate(3, 5));
