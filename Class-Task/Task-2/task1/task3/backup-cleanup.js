
const fs = require("fs").promises;
const path = require("path");

const SOURCE_DIR = path.join(__dirname, "uploads");
const BACKUP_DIR = path.join(__dirname, "backup");
const LOG_FILE = path.join(__dirname, "backup.log");

const DAYS_7 = 7 * 24 * 60 * 60 * 1000;

async function logMessage(message) {
  const log = `[${new Date().toISOString()}] ${message}\n`;
  await fs.appendFile(LOG_FILE, log);
}

async function ensureDirectory(dirPath) {
  try {
    await fs.access(dirPath);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
    await logMessage(`Created directory: ${dirPath}`);
  }
}

async function backupAndCleanup() {
  try {
    await ensureDirectory(SOURCE_DIR);
    await ensureDirectory(BACKUP_DIR);

    const files = await fs.readdir(SOURCE_DIR);

    for (const file of files) {
      const filePath = path.join(SOURCE_DIR, file);

      if (stats.isDirectory()) continue;

      const now = Date.now();
      const age = now - stats.mtimeMs;

      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const backupFileName = `${timestamp}-${file}`;
      const backupPath = path.join(BACKUP_DIR, backupFileName);

      await fs.copyFile(filePath, backupPath);
      await logMessage(`Backed up: ${file} → ${backupFileName}`);

      if (age > DAYS_7) {
        await fs.unlink(filePath);
        await logMessage(`Deleted old file: ${file}`);
      }
    }

    await logMessage("Backup & cleanup completed successfully\n");
    console.log("✅ Backup and cleanup completed");
  } catch (err) {
    await logMessage(`ERROR: ${err.message}`);
    console.error("❌ Error:", err.message);
  }
}

backupAndCleanup();
