let displayOutput = document.getElementsByClassName("displayOutput")[0];
let currentCalculation = "";
let currentNumber = "";
let id = "";
let type = "";

let buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener(
    "click",
    function () {
      id = this.getAttribute("data-id");
      type = this.getAttribute("data-type");

      switch (type) {
        case "clear":
          Clear();
          break;

        case "operator":
          Operator();
          break;

        case "symbol":
          Symbol();
          break;

        case "equal":
          Equal();
          break;

        default:
          Default();
          break;
      }
    },
    false
  );
}

function Clear() {
  currentNumber = "";
  currentCalculation = "";
  displayOutput.innerHTML = 0;
}

function Operator() {
  currentCalculation += id;
  displayOutput.innerHTML = currentNumber + " " + id;
  currentNumber = "";
}

function Symbol() {
  currentNumber += id;
  currentCalculation += id;
  displayOutput.innerHTML = currentNumber;
}

function Equal() {
  currentNumber = eval(currentCalculation);
  currentCalculation = currentNumber;
  displayOutput.innerHTML = currentNumber;
}

function Default() {
  currentNumber += id;
  currentCalculation += id;
  displayOutput.innerHTML = currentNumber;
}
