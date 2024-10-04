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
