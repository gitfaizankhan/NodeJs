// Application level middleware
const express = require('express');

const app = express();
const reqFilter = (req, res, next)=>{
    // console.log("Request Filter");
    if(!req.query.age){
        res.send("Please provide age");
    }else if(req.query.age < 18){
        res.send("You cann't access page.")
    }
    else{
        next();
    }
    
}

app.use(reqFilter);
app.get('', (request, response)=>{
    response.send("Welcome to Home Page")
})

app.get('/user', (request, response)=>{
    response.send("Welcome to User Page")
})

app.listen(5000);