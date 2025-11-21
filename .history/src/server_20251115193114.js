import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000 ;
app.listen(PORT , () =>{
    console.log(`server is running on http://localhost:${PORT}`);
})
//Website endpoint (return a html)
app.get('/', (req, res) => {
    res.send('Hello World!');
    res.sendStatus(200);
});


//CRUD-method create-post read-get update-put delete-delete