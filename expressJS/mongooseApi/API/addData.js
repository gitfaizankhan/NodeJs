const express = require('express');
require('./config');
const products = require('./products');

const app = express();
app.use(express.json());
app.post('/create', async (request, response)=>{
    let data = new products(request.body);
    let result = await data.save(); 
    // console.log(request.body);
    response.send(result);
});

app.listen(5000);