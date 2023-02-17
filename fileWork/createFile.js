const fs = require('fs');
const process = require('process');

var data = process.argv[2];

fs.writeFileSync('hello.txt', data);