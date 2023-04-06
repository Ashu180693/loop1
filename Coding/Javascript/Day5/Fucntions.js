function addNums(a, b) {
  //console.log("a", a);
  //console.log("b", b);
  console.log({ a, b });
  const result = a + b;
  return result;
}

const result1 = addNums(10, 20);
const result2 = addNums(100, 200);
const result3 = addNums(100);
const result4 = addNums();

console.log({ result1, result2, result3, result4 });

//Function
