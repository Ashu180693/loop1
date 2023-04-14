function printNumberSeries(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let x = "";
    for (let j = i; j <= n; j++) {
      x += j;
    }

    result = result + x + "\n";
  }

  return result;
}

console.log(printNumberSeries(5));
