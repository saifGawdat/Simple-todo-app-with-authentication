import {Database} from 'sqlite3';
const db = new Database('todo.db');
db.exec(`
    CREATE TABLE IF NOT EXISTS todos (`)