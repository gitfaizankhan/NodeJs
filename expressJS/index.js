const express = require('express');
const app = express();

app.get('', (request,response)=>{
    response.send("Hello, this is Home Page");
});

app.get('/about', (request, response)=>{
    response.send("Hello, This is About Page");
});

app.listen(8080, 'localhost'); 