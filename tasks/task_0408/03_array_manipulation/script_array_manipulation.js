// Write a program where multiple actions with an array will be done.
// For element filtering please use the loop (the loop type can be chosen as You want).
// ●    Create an array with the elements from input
// ●    Print out elements which are negative.
// ●    Print out elements which are odd (uneven).
// ●    Compute how many elements are odd (uneven).
// ●    Verify if there are multiple elements with the same value
// ●    Print out each second element.
// ●    Compute average value of the array.
// ●    Establish how many elements are smaller than average value.

let originalArray = [];
let negativeNumbersArray = [];
let oddNumbersArray = [];
let duplicateNumbersArray = [];
let eachSecondElementArray = [];
let sumOfOriginalArray = 0;
let averageOfOriginalArray = 0;

let originalArrayDisplay = document.getElementById("original-array");
let negativeElementsDisplay = document.getElementById("negative-elements");
let oddElementsDisplay = document.getElementById("odd-elements");
let numOddElementsDisplay = document.getElementById("number-odd-elements");
let sameValueElementsDisplay = document.getElementById("same-value-elements");
let eachSecondElementDisplay = document.getElementById("each-second-element");
let averageValueDisplay = document.getElementById("average-value");
let smallerThanAverageDisplay = document.getElementById("smaller-than-average");

let totElements = parseInt(
  prompt(`How many elements do you want to add to the array?`)
);

// populating arrays
for (let index = 1; index <= totElements; index++) {
  let currElement = prompt(`Enter the element for position #${index}`);
  originalArray.push(currElement);

  // checks if negative
  if (currElement <= 0) {
    negativeNumbersArray.push(currElement);
  }

  // checks if odd (also applies to negative numbers)
  if (currElement % 2 == 0) {
    // do nothing
  } else {
    oddNumbersArray.push(currElement);
  }
}

// checks duplicated values
let sortedOriginalArray = originalArray.sort();

for (let i = 0; i < sortedOriginalArray.length - 1; i++) {
  if (sortedOriginalArray[i + 1] == sortedOriginalArray[i]) {
    duplicateNumbersArray.push(sortedOriginalArray[i]);
  }
}

// print every other element
for (let i = 1; i < originalArray.length; i += 2) {
  eachSecondElementArray.push(originalArray[i]);
}

// calculating average of array
for (let index = 0; index <= totElements; index++) {
  sumOfOriginalArray += originalArray[index];
}

averageOfOriginalArray = sumOfOriginalArray / totElements;

originalArrayDisplay.innerHTML = originalArray;
negativeElementsDisplay.innerHTML = negativeNumbersArray;
oddElementsDisplay.innerHTML = oddNumbersArray;
numOddElementsDisplay.innerHTML = oddNumbersArray.length;
sameValueElementsDisplay.innerHTML = duplicateNumbersArray;
eachSecondElementDisplay.innerHTML = eachSecondElementArray;
averageValueDisplay.innerHTML = averageOfOriginalArray;
