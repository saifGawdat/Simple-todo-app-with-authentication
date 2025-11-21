import express from "express";
import db from "../db";
const app = express();
const router = express.Router();
// Create a new todo
router.post("/", (req, res) => {});
// Get all todos for a user
router.get("/", (req, res) => {});
// Update a todo
router.put("/:id", (req, res) => {});
// Delete a todo
router.delete("/:id", (req, res) => {});
