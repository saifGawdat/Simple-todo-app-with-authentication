const express = require('express');
const app = express();
port = 3000 ;
app.listen(port , () =>{
    console.log(`server is running on http://localhost:${port}`);
})
//Website endpoint (return a html)
app.get('/', (req, res) => {
    res.send('Hello World!');
    res.sendStatus(200);
});
//API endpoint (return a json)
app.get('/api/data', (req, res) => {
    res.send;
    res.sendStatus(200);
});