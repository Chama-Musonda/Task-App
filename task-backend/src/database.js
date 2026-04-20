import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

// Ensure data directory exists
const dataDir = path.join(process.cwd(), '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(path.join(dataDir, 'tasks.db'));

// Enable foreign keys
db.exec("PRAGMA foreign_keys = ON");

db.exec(`
    CREATE TABLE IF NOT EXISTS refresh_tokens (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      token_hash TEXT UNIQUE NOT NULL,
      user_id INTEGER NOT NULL,
      expires_at DATETIME NOT NULL,
      revoked BOOLEAN DEFAULT FALSE,
      device_info TEXT,
      ip_address TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      revoked_at DATETIME,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `)

// Create users table
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT(100),
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

// Create tasks table
db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id TEXT PRIMARY KEY,
    title TEXT(255) NOT NULL,
    description TEXT,
    due_date TEXT,
    status TEXT CHECK(status IN ('pending', 'in_progress', 'completed')) DEFAULT 'pending',
    priority TEXT CHECK(priority IN ('low', 'medium', 'high')) DEFAULT 'medium',
    category TEXT(50),
    reminder_enabled BOOLEAN DEFAULT FALSE,
    reminder_date TEXT,
    assigned_to INTEGER,
    parent_id TEXT,
    created_date TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_date TEXT,
    FOREIGN KEY (assigned_to) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (parent_id) REFERENCES tasks(id) ON DELETE CASCADE
  )
`);

// Create attachments table
db.exec(`
  CREATE TABLE IF NOT EXISTS attachments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task_id TEXT NOT NULL,
    file_url TEXT NOT NULL,
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
  )
`);

// Add indexes for performance
db.exec(`CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status)`);
db.exec(`CREATE INDEX IF NOT EXISTS idx_tasks_priority ON tasks(priority)`);
db.exec(`CREATE INDEX IF NOT EXISTS idx_tasks_due_date ON tasks(due_date)`);
db.exec(`CREATE INDEX IF NOT EXISTS idx_tasks_assigned_to ON tasks(assigned_to)`);
db.exec(`CREATE INDEX IF NOT EXISTS idx_tasks_parent_id ON tasks(parent_id)`);
db.exec(`CREATE INDEX IF NOT EXISTS idx_attachments_task_id ON attachments(task_id)`);

console.log('Database schema created successfully'); 

module.exports = db;