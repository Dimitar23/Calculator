const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const multiply = function(a, b) {
	return a*b;
};

const divide = function(a, b) {
	return a/b;
};

const operate = function(a, op, b){
    if(op === '+'){
        return add(a, b);
    } else if(op === '-'){
        return subtract(a,b);
    } else if(op === '*'){
        return multiply(a,b);
    } else if(op === '/'){
        return divide(a,b);
    }
}

let x, y, operator;
let display = document.querySelector('.display > p');
display.textContent = "";

let numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', e =>{
        //console.log(e.target);
        display.textContent = display.textContent.concat(e.target.textContent);
    });
});

let operators = document.querySelectorAll('.operator');

operators.forEach((op) => {
    op.addEventListener('click', e =>{
        //console.log(e.target);
        display.textContent = display.textContent.concat(e.target.textContent);
    });
});

let clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', (e) => {
    display.textContent = "";
})