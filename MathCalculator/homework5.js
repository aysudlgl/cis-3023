//  Aysu Dalogullari,CIS-3023,April 2 2023,Homework5
//getting the user input
var operator = null;
var userInput = '';
var firstoperator = null;

const displayWindow = document.querySelector('.display-window');

//functions to call onclick to get the text content target.textContent is used which i also learned from CHATGPT i asked what was i missing in the function element it gave me that
function numberClick(event){
    const number = event.target.textContent;
    userInput += number;
    displayWindow.textContent = userInput;
}
//declaring variables with parsefloat then to create operating calculations using switch
function Calculation(){

    if (operator === null || firstoperator === null || userInput === '') {
        return;
      }
      let result;
      const operator3 = userInput;
      const operator4 = parseFloat(firstoperator);
      const operator5 = parseFloat(operator3);
      switch (operator) {
        case '+':
          result = operator4 + operator5;
          break;
        case '-':
          result = operator4 - operator5;
          break;
        case '*':
          result = operator4 * operator5;
          break;
        case '/':
          result = operator4 / operator5;
          break;
        default:
          return;
}

userInput = result.toString();
  firstoperator = null;
  operator = null;
  displayWindow.textContent = userInput;
}

function operatorClick(event) {
    const operator2   = event.target.textContent;
    if (operator !== null) {
      Calculation();
    }
    firstoperator = userInput;
    operator = operator2;
    userInput = '';
  }
  function ACClick() {
    userInput = '';
    firstoperator = null;
    operator = null;
    displayWindow.textContent = '0';
  }
  function EqualsClick() {
    Calculation();
  }
//assigning onclick attribute to the functions 
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(function(keyboard){
   keyboard.onclick = numberClick;
});
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(function(keyboard){
    keyboard.onclick = operatorClick;
});

const acButton = document.querySelector('.AC');
acButton.onclick = ACClick;

const equalsButton = document.querySelector('.equals');
equalsButton.onclick = EqualsClick;
