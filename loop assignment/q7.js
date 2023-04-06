function printNumbers(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    return "Please enter a valid number";
  }

  if (num <= 1) {
    return "Please enter a number greater than 1";
  }
  let output = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < 5; j++) {
      output += j + " ";
    }
  }
  console.log(output);
}
printNumbers(4);
