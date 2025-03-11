import { open } from 'sqlite';
// eslint-disable-next-line import/no-extraneous-dependencies
import sqlite from 'sqlite3';

const intialiseDb = async () => {
  const db = await open({
    filename: 'database.db',
    driver: sqlite.Database,
  });

  await db.exec(`CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email_address TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
    user_type TEXT CHECK(userType IN ('student', 'teacher', 'parent', 'private tutor')) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);

  return db;
};

export default intialiseDb;
