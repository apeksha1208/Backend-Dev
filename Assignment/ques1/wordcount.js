const fs = require("fs");

// file paths
const inputFile = "Assignment/ques1/input.txt";
const outputFile = "Assignment/ques1/output.txt";

// read the input file
fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // count words
  const words = data.trim().split(/\s+/);
  const wordCount = words.length;

  // write result to output file
  fs.writeFile(outputFile, `Word Count: ${wordCount}`, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("Word count written to output.txt successfully");
  });
});


