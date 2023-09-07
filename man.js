const userInput = document.getElementById("userInput");

let expression = '';

function press(num) {
    expression += num;
    userInput.value = expression;
}

function btnEqual() {
    userInput.value = eval(expression);
    expression = '';
}

