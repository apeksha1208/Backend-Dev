// app.js
const stringUtils = require("./stringUtils");

const text = "hello world";

console.log("Original:", text);
console.log("Capitalized:", stringUtils.capitalize(text));
console.log("Reversed:", stringUtils.reverseString(text));
console.log("Vowel Count:", stringUtils.countVowels(text));
