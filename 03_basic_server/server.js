// const http = require('http');

// const server = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('Hello World\n');
// });

// server.listen(3000, 'localhost', () => {
//   console.log('Server listening on http://localhost:3000');
// });

const http = require('http');

// const server = http.createServer((request, response)=>{
//     response.write("<h1>Server started</h1>");
//     response.end();
// });


// server.listen(3000, 'localhost', ()=>{
//     console.log('Server listening on http://localhost:3000');
// });

http.createServer((req, res)=>{
    res.write("<h1>Server Started Again</h1>");
    res.end();
}).listen(3000);