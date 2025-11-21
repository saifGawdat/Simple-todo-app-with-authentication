const express = require('express');
dotenv.config();
const app = express();
port = 3000 ;
connectDB();

app.listen(port , () =>{
    console.log(`server is running on http://localhost:${port}`);
})
