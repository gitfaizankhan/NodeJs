const { response } = require('express');
const express = require('express');
const path = require('path');


const app = express();
const publicPath = path.join(__dirname);

// app.use(express.static(publicPath));
app.get('',(request, response)=>{
    response.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(request, response)=>{
    response.sendFile(`${publicPath}/about.html`)
})

app.get('/help',(request, response)=>{
    response.sendFile(`${publicPath}/help.html`)
})

app.get('*', (request, response)=>{
    response.sendFile(`${publicPath}/404.html`)
})

app.listen(5000);