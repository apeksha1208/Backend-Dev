console.log("File Manager Started");
const fs = require("fs");
const path = require("path");

const command = process.argv[2];
const filePath = process.argv[3];
const content = process.argv[4];

function handleError(err) {
  if (err.code === "ENOENT") {
    console.error("❌ Error: File or directory not found");
  } else if (err.code === "EACCES") {
    console.error("❌ Error: Permission denied");
  } else {
    console.error("❌ Error:", err.message);
  }
}

if (command === "read") {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return handleError(err);
    console.log("📄 File Content:\n", data);
  });
}
else if (command === "write") {
  fs.writeFile(filePath, content || "", (err) => {
    if (err) return handleError(err);
    console.log("✅ File written successfully");
  });
}
else if (command === "append") {
  fs.appendFile(filePath, content || "", (err) => {
    if (err) return handleError(err);
    console.log("✅ Content appended successfully");
  });
}
else if (command === "copy") {
  const destination = process.argv[4];
  fs.copyFile(filePath, destination, (err) => {
    if (err) return handleError(err);
    console.log("✅ File copied successfully");
  });
}
else if (command === "delete") {
  fs.unlink(filePath, (err) => {
    if (err) return handleError(err);
    console.log("🗑️ File deleted successfully");
  });
}
else if (command === "list") {
  fs.readdir(filePath, (err, files) => {
    if (err) return handleError(err);
    console.log("📁 Files in directory:");
    files.forEach((file) => console.log(file));
  });
}
else {
    console.error(" Error: Unknown command");
}
