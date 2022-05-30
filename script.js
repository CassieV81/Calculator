const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(num1, num2) {
    return add(num1, num2);
}

const number = document.querySelectorAll('.number');
const display = document.getElementById('display');
const addValue = document.querySelector('.add');

let value = '';

function populate() {
    number.forEach(number => {
        number.addEventListener('click', function() {
            value += number.textContent;
            display.textContent = `${value}`;
        });
    })
}
function calculate() {
    addValue.addEventListener('click', function(num1, num2) {
        console.log(num1 = display.textContent);
        operate(num1, num2);
        return value = '';
    })
}
calculate()


populate()
console.log(`${value}`);


console.log(operate(3, 5));
