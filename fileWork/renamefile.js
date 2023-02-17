const fs = require('fs');
const path = require('path');

const fileDir = path.join(__dirname);
const fileName = `${fileDir}/pp.js`;

fs.rename(fileName, 'copyfile.js', (err)=>{
    if(!err) console.log("filename is updated");
});