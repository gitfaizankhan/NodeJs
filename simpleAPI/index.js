const httpServer = require('http');
const data = require('./data');
httpServer.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'application\json'});
    res.write("<h1>Simple API Server</h1>");
    res.write(JSON.stringify(data));
    res.end();
}).listen(3000);