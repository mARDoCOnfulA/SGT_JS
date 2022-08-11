let displayResult = document.getElementById("result");

function add() {
  let firstNumber = document.getElementById("first-number").value;
  let secondNumber = document.getElementById("second-number").value;
  let result = parseInt(firstNumber) + parseInt(secondNumber);
  displayResult.innerHTML = result;
}

function subtract() {
  let firstNumber = document.getElementById("first-number").value;
  let secondNumber = document.getElementById("second-number").value;
  let result = parseInt(firstNumber) - parseInt(secondNumber);
  displayResult.innerHTML = result;
}

function multiply() {
  let firstNumber = document.getElementById("first-number").value;
  let secondNumber = document.getElementById("second-number").value;
  let result = parseInt(firstNumber) * parseInt(secondNumber);
  displayResult.innerHTML = result;
}

function divide() {
  let firstNumber = document.getElementById("first-number").value;
  let secondNumber = document.getElementById("second-number").value;
  let result = parseInt(firstNumber) / parseInt(secondNumber);
  displayResult.innerHTML = result;
}
