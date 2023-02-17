const fs = require('fs');

var readable = fs.createReadStream(__dirname+'/hello.txt', {encoding:'utf-8'});
console.log(readable);
var writeable = fs.createWriteStream(__dirname+'/test.txt');
readable.pipe(writeable);