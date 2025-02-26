// const { execSync } = require("child_process");
// const fs = require("fs");
// const path = require("path");
// const dotenv = require("dotenv");

// // Load environment variables from .env file
// dotenv.config();

// const exportSqliteDatabase = () => {
//   try {
//     // Create exports directory if it doesn't exist
//     const exportsDir = path.join(__dirname, "..", "exports");
//     if (!fs.existsSync(exportsDir)) {
//       fs.mkdirSync(exportsDir);
//     }

//     // Get path to SQLite database
//     const dbPath = path.join(__dirname, "..", "prisma", "dev.db");
//     if (!fs.existsSync(dbPath)) {
//       throw new Error("SQLite database file not found at: " + dbPath);
//     }

//     // Generate filename with timestamp
//     const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
//     const filename = path.join(exportsDir, `sqlite_export_${timestamp}.sql`);

//     // Execute sqlite3 command to export schema and data
//     console.log(`Exporting SQLite database to ${filename}...`);

//     // Using sqlite3 command-line tool
//     const command = `sqlite3 "${dbPath}" .dump > "${filename}"`;
//     execSync(command, { stdio: "inherit" });

//     console.log(`Database exported successfully to ${filename}`);

//     // Also make a backup of the actual database file
//     const backupFile = path.join(exportsDir, `dev_${timestamp}.db`);
//     fs.copyFileSync(dbPath, backupFile);
//     console.log(`Database file backed up to ${backupFile}`);
//   } catch (error) {
//     console.error("Export failed:", error.message);
//     process.exit(1);
//   }
// };

// exportSqliteDatabase();
