const path = require("path");
console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log(path.extname(__filename));

// manually path create
const pathObj = {
  dir: "user/local",
  name: "test",
  ext: "js",
};
console.log(path.format(pathObj)); // user/local/test.js

console.log(path.isAbsolute(__filename)); // true

console.log(path.join("user", "local", "mainFile", "test.js")); // user/local/mainFile/test.js
console.log(path.resolve(__dirname, "script", "test.js"));
// /Users/mohammadirfanulislam/Desktop/nodeJS/stack-learn/script/test.js

console.log(path.parse(__filename));
// {
//   root: '/',
//   dir: '/Users/mohammadirfanulislam/Desktop/nodeJS/stack-learn',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path'
// }
