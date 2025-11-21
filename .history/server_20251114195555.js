const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

connectDB();

app.listen(port , () =>{
    console.log(`server is running on http://localhost:${port}`);
})
app.get('/',(req,res)=>{
    const employee = mongoose.omitUndefined(schema.Types.ObjectId);
    res.send(employee);
})