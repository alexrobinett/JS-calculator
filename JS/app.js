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

// Funciton to reciver numbrs and call the correct oerator function 

function operate(num1 , num2, operator){
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