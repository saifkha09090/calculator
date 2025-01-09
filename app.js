let arr = ["+", "-", "*", "/", "%", "."];
let firstNum = ["0", "*", "/", "%", "."];

function calculator(val) {
  let input = document.getElementById("input");
  let lastVal = input.value.slice(-1);
  let firstVal = input.value.slice(0, 1);

  if (arr.includes(lastVal) && arr.includes(val)) {
    input.value = input.value.slice(0, -1);
  }

  if (val === "X") {
    input.value = input.value.slice(0, -1);
  } else if (val === "=") {
    input.value = eval(input.value);
  } else if (val === "C") {
    input.value = "";
  } else if (firstNum.includes(firstVal)) {
    input.value = input.value.slice(1);
    input.value = val;
  } else {
    input.value += val;
  }
}
