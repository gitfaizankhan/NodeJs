const { profile } = require('console');
const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname);

app.set('view engine', 'ejs');

app.get('/', (request, response)=>{
    response.sendFile(`${publicPath}/`)
})

app.get('/profile', (request, response)=>{
    const user = {
        name:'Faizan Khan',
        email: 'faizankhan@gmail.com',
        country:'USA',
        skills:['python', 'java', 'c++', 'c']
    }
    response.render('profile', {user});
})

app.get('/login', (request, response)=>{
    response.render('login')
})

app.listen(5000);