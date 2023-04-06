function printNumbers(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    return "Please enter a valid number";
  }

  if (num <= 1) {
    return "Please enter a number greater than 1";
  }
  let output = "";
  for (let i = 0; i <= num; i = i + 100) {
    output += i + " ";
  }
  console.log(output);
}

printNumbers(1000);
