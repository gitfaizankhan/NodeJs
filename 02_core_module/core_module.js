const fs = require('fs');
// console.log("fs",fs);
// ==========================       write file in node js
fs.writeFileSync("02_core_module/test.txt", "only for testig purposr");



// =============================
// read file method using node js
const { readFile } = require('fs');

readFile('02_core_module/test.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});

