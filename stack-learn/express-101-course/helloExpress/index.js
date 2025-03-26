const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile("./pages/pages.html", (err, data) => {
    if (err) {
      console.log(err);
      return `<h3>I am Error</h3>`;
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.listen(3000, () => {
  console.log("Server is Running");
});
