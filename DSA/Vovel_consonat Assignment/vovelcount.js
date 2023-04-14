// Input string
var string = prompt("Enter a string: ");

// Converting string to lowercase for case-insensitive comparison
string = string.toLowerCase();

// Counting vowels
var vowelCount = 0;
for (var i = 0; i < string.length; i++) {
  if (string[i].match(/[aeiou]/)) {
    vowelCount++;
  }
}

console.log("Number of vowels in the string: " + vowelCount);
