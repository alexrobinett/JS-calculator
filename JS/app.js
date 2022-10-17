let displayValue = ""
let storedValue = ""
let operator =
// Functions for Math
function add (num1 , num2) {
	let result = num1 + num2
    console.log(result)
    return result
};

function subtract(num1, num2) {
	let result = num1 - num2
    console.log(result)
    return result
};

function multiply (num1 , num2) {
  let result = num1 * num2
  console.log(result)
  return result
};

function divide(num1 , num2){
    let result = num1 / num2
    console.log(result)
    return result    
}

// function to receive numbers and call the correct operator function 

function operate(num1 , num2 = 0, operator){
if (operator === "+"){
    console.log("I will add")
    return add(num1 , num2)
}else if (operator === "-"){
    console.log("I will subtract")
    return subtract(num1,num2)
}else if (operator === "/"){
    console.log("I will divide")
    return divide(num1,num2)
}else if (operator === "*"){
    console.log("I will Multiply")
    return multiply(num1 , num2)
}else console.log("something went wrong")
}


const BUTTONS = document.querySelectorAll('button')

const INPUT_NUMBER_DISPLAY = document.querySelector(".big-number")

BUTTONS.forEach((button) => {
    
    button.addEventListener('click', () => {
      if(button.classList == "num"){
        updateDisplay()
        displayValue += button.id
        updateDisplay()
        console.log(storedValue)
      }else if(button.id == "clear"){
        displayValue = 0
        storedValue = 0
        updateDisplay()
        displayValue = ""
      }else if(button.classList == "operations"){
            operator = button.id
            storedValue = operate(Number(storedValue) , Number(displayValue) , operator)
            displayValue = storedValue
            updateDisplay()
            displayValue = ""
        console.log(`the current number ${displayValue} and the stored value is ${storedValue}`)
      }else if(button.id == "operate"){
        displayValue = operate(Number(storedValue) , Number(displayValue) , operator)
        if(isNaN(displayValue)){
            displayValue = "Don't divide by zero dummy!"
            updateDisplay()
            displayValue = ""
        }else
        updateDisplay()
        displayValue = ""
      }
     
    });
  });

function updateDisplay(){
    
    INPUT_NUMBER_DISPLAY.textContent = displayValue
}
