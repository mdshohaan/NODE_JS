// File System(fs)
const fs = require("fs");
fs.writeFileSync("myFile.txt", "hello world");
fs.appendFileSync("myFile.txt", "how are you");

const data = fs.readFileSync("myFile.txt");
console.log(data);
