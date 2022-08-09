// Ask user to enter the elements to the array and sort it (allow numbers only)
// Prompt + loop can be used
// Regarding the task about the array - I suggest you to create the empty array and use push after each user's input
// You can ask user to enter the  special word (ex. END) to identify the end of array input

let namesArray = [];
let unsortedValuesDisplay = document.getElementById("unsorted-values");
let sortedValuesDisplay = document.getElementById("sorted-values");

let totElements = parseInt(
  prompt(`How many elements do you want to add to the array?`)
);

for (let index = 1; index <= totElements; index++) {
  let currName = prompt(`Enter the name for position #${index}`);
  namesArray.push(currName);
}

unsortedValuesDisplay.innerHTML = namesArray;
let sortedValues = namesArray.sort();
sortedValuesDisplay.innerHTML = sortedValues;
