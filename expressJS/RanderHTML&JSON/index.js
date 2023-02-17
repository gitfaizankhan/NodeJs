const express = require('express');
const app = express();


app.get('', (request, respose)=>{
    respose.send("<h1>Hello, Faizan Khan</h1>");
});


app.get('/about', (request, respose)=>{
    respose.send(`
    <input type = "text" placeholder="User Name" />
    <button type="submit">Click Me</button>
    <a href="/">Go to Home Page</a>
    `);
});


app.get('/help', (request, respose)=>{
    respose.send([
        {
            name:'Faizan Khan',
            email:'faizan@gmail.com'
        },
        {
            name:'Irfan Khan',
            email:'irfan@gmail.com'
        }
    ],)
})


app.get('/link', (request, response)=>{
    response.send(`<h1>Welcome, to Home Page</h1> <a href="/about">Go to About</a>`);
})

app.listen(8080);