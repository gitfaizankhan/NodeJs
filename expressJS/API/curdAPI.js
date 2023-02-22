const express = require('express');
const connection = require('./mongoConnection');


const app = express();


app.get('/', async  (request, response)=>{
    // response.send("Hello Faizan Khan");
    let data = await connection();
    data = await data.find().toArray();
    // console.log(data);
    response.send(data);
})



app.listen(5000, console.log("Server running on 5000"));