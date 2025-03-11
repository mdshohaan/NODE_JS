// File System(fs)
const fs = require("fs");
fs.writeFileSync("myFile.txt", "hello world");
fs.appendFileSync("myFile.txt", "how are you");

// Synchoronous way fs
const data = fs.readFileSync("myFile.txt");
// console.log(data.toString());

// Asynchoronous way fs
fs.readFile("myFile.txt", (err, data) => {
  console.log(data.toString());
});
