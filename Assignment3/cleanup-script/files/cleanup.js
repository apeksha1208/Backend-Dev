const fs = require("fs");
const path = require("path");

// directory to clean
const targetDir = path.join(__dirname, "files");

// 7 days in milliseconds
const DAYS_7 = 7 * 24 * 60 * 60 * 1000;

// current time
const now = Date.now();

fs.readdir(targetDir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(targetDir, file);

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error("Error getting file stats:", err);
        return;
      }

      const fileAge = now - stats.mtimeMs;

      if (fileAge > DAYS_7) {
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          } else {
            console.log("Deleted:", file);
          }
        });
      }
    });
  });
});
