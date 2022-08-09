let value1 = prompt("Enter the first value");
let value2 = prompt("Enter the second value");
let operation = prompt("Enter the operation: +,-,*,/");
let result;

// option: to define const notNumbers = isNaN(value1) || isNaN(value2)
// and then everywhere instead use notNumbers variable

if (operation == "+") {
  if (isNaN(value1) || isNaN(value2)) result = value1 + value2;
  // if value1 or value 2 is a string, then do concatination
  else result = Number(value1) + Number(value2);
  // option with condiitional if would be
  // result = notNumbers ? (value1 + value2) : (Number(value1) + Number(value2));
} else if (operation == "-") {
  if (isNaN(value1) || isNaN(value2))
    alert("Subtraction can only be applied to the numbers");
  else result = Number(value1) - Number(value2);
} else if (operation == "*") {
  if (isNaN(value1) || isNaN(value2))
    alert("Multiplication can only be applied to the numbers");
  else result = Number(value1) * Number(value2);
} else if (operation == "/") {
  if (isNaN(value1) || isNaN(value2))
    alert("Division can only be applied to the numbers");
  else result = Number(value1) / Number(value2);
} else {
  alert("Operation is not correct");
}

if (result != undefined) alert("Result is " + result);

//WRONG TRY, DOESN'T WORK
// if (typeof value1 === "number" && typeof value2 === "number") {
//   // if both values ARE numbers
//   if (operation == "+") {
//     alert(Number.parseInt(value1) + Number.parseInt(value2));
//   } else if (operation == "-") {
//     alert(Number.parseInt(value1) - Number.parseInt(value2));
//   } else if (operation == "*") {
//     alert(Number.parseInt(value1) * Number.parseInt(value2));
//   } else if (operation == "/") {
//     alert(Number.parseInt(value1) / Number.parseInt(value2));
//   } else alert("Error - wrong operator!");
// } else if (typeof value1 === "string" || typeof value2 === "string") {
//   // if one of the values is string
//   if (operation == "+") {
//     alert(value1 + value2);
//   } else if (operation == "-" || operation == "*" || operation == "/") {
//     alert("Error - can't perform the operation!");
//   } else alert("Error - wrong operator!");
// }
