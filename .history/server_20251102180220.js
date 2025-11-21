const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = 3000;
const connectDB = require('./db');
const { default: mongoose } = require('mongoose');

connectDB();

app.listen(port , () =>{
    console.log(`server is running on http://localhost:${port}`);
})
app.get('/',(req,res)=>{
    const employee = mongoose.omitUndefined(schema.Types.ObjectId);
    res.send();
})