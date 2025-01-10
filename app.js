let operators = ["+", "-", "*", "/", "%", "."];
let firstNum = ["0", "*", "/", "%", "."];

function calculator(val) {
  let input = document.getElementById("input");
  let lastVal = input.value.slice(-1);
  let getFirstVal = input.value.slice(0, 1);

  if (operators.includes(lastVal) && operators.includes(val)) {
    input.value = input.value.slice(0, -1) + val;
  }else if (val === "X") {
    input.value = input.value.slice(0, -1);
  } else if (val === "=") {
    input.value = eval(input.value);
  } else if (val === "C") {
    input.value = "";
  } else if (firstNum.includes(getFirstVal)) {
    input.value = input.value.slice(1);
    input.value = val;
  } else {
    input.value += val;
  }
}
