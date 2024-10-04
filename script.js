add = function (a, b) {
  console.log(a + b);
};
subtract = function (a, b) {
  console.log(a - b);
};
multiply = function (a, b) {
  console.log(a * b);
};
divide = function (a, b) {
  console.log(a / b);
};
operate = function (a, op, b) {
  if (op === "+") return add(a, b);
  if (op === "-") return subtract(a, b);
  if (op === "x") return multiply(a, b);
  if (op === "÷") return divide(a, b);
};
let operation = [];
let number = null;
display = document.querySelector(".display");
inputs = document.querySelector(".inputs");
clear = document.querySelector(".clear");
equals = document.querySelector(".equals");
displayOp = function () {
  inputs.addEventListener("click", function (e) {
    if (e.target.classList.contains("number")) {
      display.textContent += e.target.textContent;
      number = display.textContent;
    }
    if (e.target.classList.contains("operator")) {
      operation.push(number);
      number = null;
      display.textContent = "";
      operation.push(e.target.textContent);
      console.log(operation);
    }
  });
};
clearDisplay = function () {
  clear.addEventListener("click", function (e) {
    display.textContent = "";
    number = null;
    operation = [];
  });
};
calculate = function () {
  equals.addEventListener("click", function () {
    console.log(operation);
  });
};
displayOp();
clearDisplay();
calculate();
