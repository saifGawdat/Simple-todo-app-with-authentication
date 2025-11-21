import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000 ;
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.listen(PORT , () =>{
    console.log(`server is running on http://localhost:${PORT}`);
})
//Website endpoint (return a html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//routes 

app.use('/auth' , authRoutes);
app.use('/todos', todoRoutes);
//CRUD-method create-post read-get update-put delete-delete