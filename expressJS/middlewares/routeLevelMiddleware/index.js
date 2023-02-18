// Routing level routing 

const express = require('express');
const app = express();
const reqFilter = require('./midware')
const route = express.Router();



app.get('', (request, response)=>{
    response.send("Welcome to Home Page...!!!");
})

app.get('/user',reqFilter, (request, response)=>{
    response.send('Welcome to User Workspace...!!!')
})

// grouped route 
route.use(reqFilter);
route.get('/about', (request, response)=>{
    response.send("Welcome to About Page...!!!")
})

route.get('/course', (request, response)=>{
    response.send("Choose your Course");
})

app.use('/', route);

app.listen(5000);