const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname);

fs.readdir(dirPath, (err, files)=>{

    // give file name in array forms
    console.warn(files); 

    // if we want to read file one by one then.
    files.forEach(file=>{
        console.log(file);
    })
    
});