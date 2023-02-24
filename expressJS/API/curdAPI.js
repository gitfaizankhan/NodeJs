const express = require('express');
const connection = require('./mongoConnection');
const mongoDb = require('mongodb');

const app = express();
app.use(express.json());
// get api method
app.get('/', async  (request, response)=>{
    // response.send("Hello Faizan Khan");
    let data = await connection();
    data = await data.find().toArray();
    // console.log(data);
    response.send(data);
})



// post method
app.post('/', async (request, response)=>{
    console.log(request.body);
    // console.log(response.send(request.body));
    let data = await connection();
    let insertdata = await data.insertOne(request.body);
    response.send(insertdata);

})


// put method

app.put('/', async (request, response)=>{
    let data = await connection();
    let updatedData = await data.updateOne(
        {brand:request.body.brand},
        {$set:request.body}
    )
    response.send(updatedData);
})


// delete method
app.delete('/:id', async (request, response)=>{
    let data = await connection();
    let deleteItem = await data.deleteOne({_id: new mongoDb.ObjectId(request.params.id)});
    response.send(deleteItem);
})

app.listen(5000, console.log("Server running on 5000"));