// + Operator -> Add/Concat

// Summation of numbers
let sum = 10 + 20;
console.log("Sum: ", sum); // 30

const sum2 = 10 + 100;
console.log("Sum: ", sum2);

let num1 = 10;
let num2 = 40;
const finalSum = num1 + num2 + sum + sum2;
console.log("Final Sum: ", finalSum);

/************************Plus with Strings************* */

const resultV2 = "ankit" + 10;
console.log("resultV2: ", resultV2, typeof resultV2);

const resultV3 = "ankit" + " " + "jain";
console.log("resultV3: ", resultV3);

const uName = "Vikas";
const uCity = "Denmark";
const uCountry = "Europe";

const greetingsMessage =
  "Hello " + uName + ", Welcome to " + uCity + ", " + uCountry;
console.log("greetingsMessage: ", greetingsMessage + ".");

// Welcome yourName to VSS India. yourName will be going to become perfect & skilled soon.

let yourName = "Ashutosh Gupta";

console.log(
  "Message: ",
  "Welcome " +
    yourName +
    " to VSS India. " +
    yourName +
    " will be going to become perfect & skilled soon."
);
