//  "request" and "response" are objects that represent the incoming HTTP request and the outgoing HTTP response in a web application.

// "request" contains information about the incoming request, such as headers, query parameters, and request body.

// "response" is used to build and send the HTTP response to the client. 

// "send" method is used to send a string as the response body

const { response } = require('express');
const express = require('express');
const app = express();

app.get('', (request, response)=>{
    console.log("Data send by browser ", request.query);
    // response.send("Data send by browser "+request.query.name);
    response.send("Hello, THIS IS HOME PAGE");
});

app.get('/about', (request, response)=>{
    response.send("Hello, THIS IS ABOUT PAGE");
});

app.listen(8080);


