const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = 3000;
con

connectDB();

app.listen(port , () =>{
    console.log(`server is running on http://localhost:${port}`);
})
app.get('/',(req,res)=>{
    res.send('Hello World!');
})