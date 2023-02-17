const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname);
const fileName = `${dirPath}/hello.txt`;
fs.appendFileSync(fileName, ' update operation success.', (err)=>{
});