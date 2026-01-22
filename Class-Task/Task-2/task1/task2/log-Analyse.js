const fs = require("fs");
const readline = require("readline");


const logFilePath = process.argv[2];
const outputFilePath = "summary.txt";

let totalLines = 0;
let errorCount = 0;
let warningCount = 0;
let infoCount = 0;

if (!logFilePath) {
  console.error("❌ Please provide log file path");
  console.log("Usage: node logAnalyzer.js <logfile>");
  process.exit(1);
}

const readStream = fs.createReadStream(logFilePath, {
  encoding: "utf8",
});


readStream.on("error", (err) => {
  if (err.code === "ENOENT") {
    console.error("❌ Log file not found");
  } else if (err.code === "EACCES") {
    console.error("❌ Permission denied");
  } else {
    console.error("❌ Error:", err.message);
  }
});

// Read line by line using readline (stream-based)
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity,
});

rl.on("line", (line) => {
  totalLines++;

  if (line.includes("ERROR")) errorCount++;
  else if (line.includes("WARNING")) warningCount++;
  else if (line.includes("INFO")) infoCount++;
});

rl.on("close", () => {
  const summary = `
Log File Analysis Report
-----------------------
Total Lines   : ${totalLines}
ERROR Count   : ${errorCount}
WARNING Count : ${warningCount}
INFO Count    : ${infoCount}
`;

  fs.writeFile("summary.txt", summary, (err) => {
    if (err) {
      console.error("❌ Failed to write summary");
    } else {
      console.log("✅ Log analysis complete");
      console.log("📄 Summary written to summary.txt");
    }
  });
});

