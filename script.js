add = function (a, b) {
  return a + b;
};
subtract = function (a, b) {
  return a - b;
};
multiply = function (a, b) {
  return a * b;
};
divide = function (a, b) {
  if (b === 0) {
    return (display.textContent = "Self Destruct!");
  }
  return a / b;
};
operate = function (a, op, b) {
  if (op === "+") return add(a, b);
  if (op === "-") return subtract(a, b);
  if (op === "x") return multiply(a, b);
  if (op === "÷") return divide(a, b);
};
let sum = 0;
let operation = [];
let number = null;
let refresh = false;
display = document.querySelector(".display");
inputs = document.querySelector(".inputs");
clear = document.querySelector(".clear");
equals = document.querySelector(".equals");
displayOp = function () {
  inputs.addEventListener("click", function (e) {
    if (e.target.classList.contains("number")) {
      if (refresh) {
        number = null;
        display.textContent = "";
        refresh = false;
      }
      display.textContent += e.target.textContent;
      number = display.textContent;
    }
    if (e.target.classList.contains("operator")) {
      if (refresh) {
        return;
      }
      refresh = true;
      operation.push(+number);

      operation.push(e.target.textContent);
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
    if (refresh) {
      return;
    }
    operation.push(+number);
    if (operation.length >= 3) {
      number = null;
      display.textContent = "";
      while (operation.length > 1) {
        console.log(operation);
        sum = operate(...operation.splice(0, 3));
        console.log(sum);
        operation.unshift(sum);
        console.log(operation);
      }
      display.textContent = sum;
      refresh = true;
      operation = [];
    }
  });
};
displayOp();
clearDisplay();
calculate();
