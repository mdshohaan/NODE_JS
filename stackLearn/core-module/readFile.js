const fs = require("fs");

fs.readFile("./data.json", (err, data) => {
  if (err) {
    console.log(err);
  }
  let obj = JSON.parse(data);
  console.log(obj); // { name: 'Irfan', study: { SSS: 2014, HSC: 2016 } }
});
