const express = require('express');
const app = express();
port = 3000 ;
app.listen(port , () =>{
    console.log(`server is running on http://localhost:${port}`);
})
//Website 
app.get('/', (req, res) => {
    res.send('Hello World!');
    res.sendStatus(200);
});