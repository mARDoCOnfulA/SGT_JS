let number1 = prompt("Please enter the first number");
let number2 = prompt("Please enter the second number");

let resultAddition = Number.parseInt(number1) + Number.parseInt(number2);
let resultSubtraction = Number.parseInt(number1) - Number.parseInt(number2);
let resultMultiplication = Number.parseInt(number1) * Number.parseInt(number2);
let resultDivision = Number.parseInt(number1) / Number.parseInt(number2);
alert(
  "The result of addition is " +
    resultAddition +
    "\nThe result of subtraction is " +
    resultSubtraction +
    "\nThe result of multiplication is " +
    resultMultiplication +
    "\nThe result of division is " +
    resultDivision
);
