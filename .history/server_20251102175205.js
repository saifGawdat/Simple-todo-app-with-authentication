const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
app.listen(port , () =>{
    console.log(`server is running on http://localhost:${port}`);
})
app.get('/',(req,res)=>{
    res.send('Hello World!');
})