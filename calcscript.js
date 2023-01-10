"use strict";
let result = 0;

function displaySolution() {
  let number1 = parseFloat(document.getElementById("num1").value);
  console.log(number1);
  let operator = document.getElementById("optr").value;
  console.log(operator);
  let number2 = parseFloat(document.getElementById("num2").value);
  console.log(number2);

  if (!number1 || !operator || !number2) {
    document.getElementsById("solution").value = "";
  }
  if (operator === "+") {
    let result = number1 + number2;
    document.getElementById("solution").value = result;
  } else if (operator === "-") {
    let result = number1 - number2;
    document.getElementById("solution").value = result;
  } else if (operator === "*") {
    let result = number1 * number2;
    document.getElementById("solution").value = result;
  } else if (operator === "/") {
    let result = number1 / number2;
    document.getElementById("solution").value = result;
  }
}
