const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(3000, () => {
  console.log("Server is Running");
});
