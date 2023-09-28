const add = function(a, b) {
	return +a + +b;
};

const subtract = function(a, b) {
	return a-b;
};

const multiply = function(a, b) {
	return a*b;
};

const divide = function(a, b) {
    if (b===0){
        return 'nt lol';
    } else{
        return a/b;
    }
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
        //console.log(e.target.textContent);
        if(e.target.textContent==='.'){
            if(!display.textContent.includes('.')){
                display.textContent = display.textContent.concat(e.target.textContent);
            }
        } else{
            display.textContent = display.textContent.concat(e.target.textContent);
        }
    });
});

let operators = document.querySelectorAll('.operator');

operators.forEach((op) => {
    op.addEventListener('click', e =>{
        //console.log(e.target);
        if(display.textContent){
            if(e.target.textContent == '='){
                y = display.textContent.split(operator)[1];
                if(x && operator && y){
                    display.textContent = operate(x, operator, y).toFixed(2);
                }
            } else if(display.textContent.includes('+') || display.textContent.includes('-') || 
            display.textContent.includes('*') || display.textContent.includes('/')){
                y = display.textContent.split(operator)[1];
                display.textContent = operate(x, operator, y).toFixed(2);
                operator = e.target.textContent;
                x = +display.textContent;
                y = null;
                display.textContent = display.textContent.concat(e.target.textContent);
            } else{
                x = +display.textContent;
                operator = e.target.textContent;
                console.log(`x ${x} op ${operator} y ${y}`);
                display.textContent = display.textContent.concat(e.target.textContent);
            }
        }
    });
});

let clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', (e) => {
    display.textContent = "";
})

let backspaceButton = document.querySelector('#backspace');

backspaceButton.addEventListener('click', (e) => {
    display.textContent = display.textContent.slice(0,-1);
})