let displayValue = ""
let storedValue = ""
let operator
let numberOperations = 0 
let result 
// Functions for Math
function add (num1 , num2) {
	let result = num1 + num2
    console.log(result)
    return result
};

function subtract(num1, num2) {
	let result = num2 - num1
    console.log(result)
    return result
};

function multiply (num1 , num2) {
  let result = num1 * num2
  console.log(result)
  return result
};

function divide(num1 , num2){
    let result = num2 / num1
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
        displayValue += Number(button.id)
        updateDisplay()
      }else if(button.id == "clear"){
        displayValue = 0
        storedValue = 0
        numberOperations = 0
        updateDisplay()
        displayValue = ""
      }else if(button.classList == "operations"){
            if(numberOperations < 1){
                operator = button.id
                storedValue = displayValue
                displayValue = 0
                updateDisplay()
                displayValue = ""
                numberOperations++
            }else if (numberOperations >= 1){
                result = operate(Number(displayValue) , Number(storedValue), operator)
                console.log(result)
                storedValue = result 
                operator = button.id
                displayResult()
                displayValue = ""
                numberOperations++
            }
            console.log(`number of operations performed:${numberOperations}`)
      }else if(button.id == "operate"){
        if(storedValue == 0 || storedValue == ""){
            return
        }else
        result = operate(Number(displayValue) , Number(storedValue), operator)
        displayResult()
        displayValue = ""
        numberOperations = 1

      }
     
    });
  });

function updateDisplay(){
    
    INPUT_NUMBER_DISPLAY.textContent = displayValue
}

function displayResult(){
    if (result == "Infinity"){
        INPUT_NUMBER_DISPLAY.textContent = "LMAO"
    }else
    INPUT_NUMBER_DISPLAY.textContent = result
}
