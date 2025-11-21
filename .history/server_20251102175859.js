const express = require('express');
co
const app = express();
const port = 3000;
import connectDB from './db.js';

connectDB();

app.listen(port , () =>{
    console.log(`server is running on http://localhost:${port}`);
})
app.get('/',(req,res)=>{
    res.send('Hello World!');
})