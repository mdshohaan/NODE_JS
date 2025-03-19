const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("I am listening");
});

app.get("*", (req, res) => {
  res.send("I am Not Found");
});

app.listen(PORT, () => {
  console.log("Server is Running");
});
