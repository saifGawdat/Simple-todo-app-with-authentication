const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
import port fro
const app = express();

connectDB();

app.listen(port , () =>{
    console.log(`server is running on http://localhost:${port}`);
})
