const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "system-log.txt");

function logData(data) {
  const logEntry =
    `${data.timestamp} | CPU: ${data.cpuCount} | FreeMem: ${data.freeMemory} | TotalMem: ${data.totalMemory} | Platform: ${data.platform}\n`;

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("Error writing log:", err);
    }
  });
}

module.exports = logData;