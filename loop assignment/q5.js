function printNumbers(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    return "Please enter a valid number";
  }

  if (num <= 1) {
    return "Please enter a number greater than 1";
  }
  let output = "";
  for (let i = num; i >= 0; i--) {
    output += i + " ";
  }
  console.log(output);
}
printNumbers(9);
