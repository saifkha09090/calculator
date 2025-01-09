let arr = ["+", "-", "*", "/", "%", "."];

function calculator(val) {
  let input = document.getElementById("input");
  let lastVal = input.value.slice(-1);
  let firstVal = input.value.slice(0, 1);

  if (arr.includes(lastVal) && arr.includes(val)) {
    input.value = input.value.slice(0, -1);
  }

  if (val === "C") {
    input.value = "";
  } else if (val === "X") {
    input.value = input.value.slice(0, -1);
  } else if (firstVal === "0" || firstVal === ".") {
    input.value = input.value.slice(1);
    input.value = val;
  } else if (val === "=") {
    input.value = eval(input.value);
  } else {
    input.value += val;
  }
}
