import {Database} from 'sqlite3';
const db = new Database('todo.db');
db.exec(`
    CREATE TABLE users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT ,
        )`)