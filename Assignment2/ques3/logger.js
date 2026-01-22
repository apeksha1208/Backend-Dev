const os = require("os");
const fs = require("fs");

function logSystemInfo() {
    const log = `
Time: ${new Date().toLocaleString()}
Platform: ${os.platform()}
CPU Cores: ${os.cpus().length}
Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
-----------------------------
`;

    fs.appendFile("system.log", log, (err) => {
        if (err) console.error("Error writing file");
    });
}

setInterval(logSystemInfo, 5000);

