// Input character
var char = prompt("Enter a character: ");

// Converting character to lowercase for case-insensitive comparison
char = char.toLowerCase();

// Checking if character is a vowel or consonant
if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  console.log(char + " is a vowel.");
} else if (char.match(/[a-z]/) && char.length === 1) {
  console.log(char + " is a consonant.");
} else {
  console.log("Invalid input.");
}
