const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/about", (req, res) => {
  console.log(res.headersSent); // false
  res.render("pages/about", {
    name: "Bangladesh",
  });
  console.log(res.headersSent); // true
});

app.listen(3000, () => {
  console.log("Server is Running");
});
