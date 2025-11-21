import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000 ;
import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// اعمل public folder static
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT , () =>{
    console.log(`server is running on http://localhost:${PORT}`);
})
//Website endpoint (return a html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
 
});


//CRUD-method create-post read-get update-put delete-delete