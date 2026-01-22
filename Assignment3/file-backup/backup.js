const fs = require("fs");
const path = require("path");

const originalFile = "original.txt";

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

const backupFile = `original-backup-${timestamp}.txt`;
fs.copyFile(originalFile, backupFile, (err) => {
  if (err) {
    console.error("Backup failed:", err);
  } else {
    console.log("Backup created:", backupFile);
  }
});
