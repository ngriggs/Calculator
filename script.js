const buttonsContainer = document.querySelector('.buttons');
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.backspace')
window.addEventListener("load", createButtons);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteChar);

function deleteChar() {
    currentString = document.querySelector('.displayText').innerHTML
    newString = currentString.slice(0, -1)
    document.querySelector('.displayText').innerHTML = newString
}
function clear() {
    document.querySelector('.displayText').innerHTML = "Please enter an equation";
}
function setGridSize(size) {
    buttonsContainer.style.gridTemplateColumns = "repeat("+size+", 1fr";
    buttonsContainer.style.gridTemplateRows = "repeat("+size+", 1fr";
}
function createButtons() {
    for (i = 0; i < 16; i++) {
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('numbers');
        buttonDiv.setAttribute('id', i);

        if (i < 10) {
            buttonDiv.innerHTML += '<h3>' + i + '</h3>';
            buttonDiv.addEventListener('click', function() {
                if (document.querySelector('.displayText').innerHTML == "Please enter an equation") {
                    document.querySelector('.displayText').innerHTML = buttonDiv.innerText;
                } else {
                    document.querySelector('.displayText').innerHTML += buttonDiv.innerText;
                }
            });
            
        } else if (i == 10) {
            buttonDiv.innerHTML += '<h3>.</h3>';
            buttonDiv.addEventListener('click', function() {
                if (document.querySelector('.displayText').innerHTML.includes('.')) {

                } else {
                    document.querySelector('.displayText').innerHTML += buttonDiv.innerText;
                }
            });

        } else if (i == 11) {
            buttonDiv.innerHTML += '<h3>=</h3>';
            buttonDiv.addEventListener('click', evaluateDisplay);
        } else if (i == 12) {
            buttonDiv.innerHTML += '<h3>+</h3>';
            buttonDiv.addEventListener('click', function() {
                if (document.querySelector('.displayText').innerHTML.includes('+') ||
                document.querySelector('.displayText').innerHTML.includes('-') ||
                document.querySelector('.displayText').innerHTML.includes('*') ||
                document.querySelector('.displayText').innerHTML.includes('/')) {
                    evaluateDisplay()
                    document.querySelector('.displayText').innerHTML += buttonDiv.innerText;
                } else {
                    document.querySelector('.displayText').innerHTML += buttonDiv.innerText;
                }
            });
        } else if (i == 13) {
            buttonDiv.innerHTML += '<h3>-</h3>';
            buttonDiv.addEventListener('click', function() {
                if (document.querySelector('.displayText').innerHTML.includes('+') ||
                document.querySelector('.displayText').innerHTML.includes('-') ||
                document.querySelector('.displayText').innerHTML.includes('*') ||
                document.querySelector('.displayText').innerHTML.includes('/')) {
                    evaluateDisplay()
                    document.querySelector('.displayText').innerHTML += buttonDiv.innerText;
                } else {
                    document.querySelector('.displayText').innerHTML += buttonDiv.innerText;
                }            });
        } else if (i == 14) {
            buttonDiv.innerHTML += '<h3>*</h3>';
            buttonDiv.addEventListener('click', function() {
                if (document.querySelector('.displayText').innerHTML.includes('+') ||
                document.querySelector('.displayText').innerHTML.includes('-') ||
                document.querySelector('.displayText').innerHTML.includes('*') ||
                document.querySelector('.displayText').innerHTML.includes('/')) {
                    evaluateDisplay()
                    document.querySelector('.displayText').innerHTML += buttonDiv.innerText;
                } else {
                    document.querySelector('.displayText').innerHTML += buttonDiv.innerText;
                }            });
        } else {
            buttonDiv.innerHTML += '<h3>/</h3>';
            buttonDiv.addEventListener('click', function() {
                if (document.querySelector('.displayText').innerHTML.includes('+') ||
                document.querySelector('.displayText').innerHTML.includes('-') ||
                document.querySelector('.displayText').innerHTML.includes('*') ||
                document.querySelector('.displayText').innerHTML.includes('/')) {
                    evaluateDisplay()
                    document.querySelector('.displayText').innerHTML += buttonDiv.innerText;
                } else {
                    document.querySelector('.displayText').innerHTML += buttonDiv.innerText;
                }            });
        }
        buttonsContainer.appendChild(buttonDiv);
    }
    setGridSize(4)
}

const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const multiply = function(a, b) {
    return a * b
};

const divide = function(a, b) {
    return a / b
};

function operate(a, operator, b) {
    let ans;
    switch(operator) {
        case '+':
            ans = add(a,b)
            break;
        case '-':
            ans = subtract(a,b)
            break;
        case '*':
            ans = multiply(a,b)
            break;
        case '/':
            ans = divide(a,b)
            break;
    };
    return ans;
};

function evaluateDisplay() {
    let eq = document.querySelector('.displayText').innerHTML.split(/(\D)/);

    if (eq.includes('.')) {
        index = eq.indexOf('.')
        if (index == 1) {
            newVal = eq[index-1] + eq[index] + eq[index+1]
            eq1 = parseFloat(newVal)
            op = eq[3]
            eq2 = parseFloat(eq[4])
        } else if (index == 3) {
            newVal = eq[index-1] + eq[index] + eq[index+1]
            eq2 = parseFloat(newVal)
            eq1 = parseFloat(eq[0])
            op = eq[1]
            console.log(newVal)
            console.log(eq1)
            console.log(op)
            console.log(eq2)
        }
        let answer = operate(eq1, op, eq2)
        document.querySelector('.displayText').innerHTML = answer;
    }  else {
        eq1 = parseFloat(eq[0])
        op = eq[1]
        eq2 = parseFloat(eq[2])
        let answer = operate(eq1, op, eq2)
        document.querySelector('.displayText').innerHTML = answer;
    }


}


