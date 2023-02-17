const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname);
const filePath = `${dirPath}/hello.txt`;
fs.readFile(filePath,{encoding:'utf-8'},(err, fileData)=>{
    if(err){
        return console.log(err);
    }
    console.log(fileData);
});