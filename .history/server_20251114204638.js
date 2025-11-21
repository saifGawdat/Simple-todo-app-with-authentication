const express = require('express');
const app = express();
port = 3000 ;
app.listen(port , () =>{
    console.log(`server is running on http://localhost:${port}`);
})
app.get('/', (req, res) => {
    res.send('Hello World!');
    res.status(200);
});