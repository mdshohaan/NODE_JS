const fs = require("fs");
const testObj = {
  name: "Irfan",
  study: {
    SSS: 2014,
    HSC: 2016,
  },
};
const data = JSON.stringify(testObj);

fs.writeFile("./data.json", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully write");
  }
});
