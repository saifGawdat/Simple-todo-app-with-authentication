import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db.js";
const app = express();

const router = express.Router();

//register a new user endpoint auth/register
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  // save the new user and the hashedPassword to the data base
  try {
    const insertUser = db.prepare(
      `INSERT INTO users (username,password) VALUES (?,?)`
    );
    const result = insertUser.run(username, hashedPassword);
    // so now we have a user ,  let's insert a default todo for him
    const defaultTodo = `Hello :) , Add your first task today`;
    const insertTodo = db.prepare(
      `INSERT INTO todos (user_id,task) VALUES (?,?)`
    );
    insertTodo.run(result.lastInsertRowid, defaultTodo);
    //creating a token
    const token = jwt.sign(
      { id: result.lastInsertRowid },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.json({ token });
  } catch (error) {
    console.log(error.message);
    res.sendStatus(503);
  }
});

//login endpoint auth/login
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  try {
    const getUser = db.prepare(`SELECT * FROM users WHERE username = ?`);
    const user = getUser.get(username);
    if (!user) {
      return res.status(404).json({ message: "Invalid username or password" });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.json({ token });
  } catch (error) {
    console.log(error.message);
    res.sendStatus(503);
  }
});

export default router;
