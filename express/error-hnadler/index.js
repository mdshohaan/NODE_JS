const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.status(505).send("There was an Error");
});

app.get("/", (req, res) => {
  res.send(a);
});

app.listen(3000, () => {
  console.log("Server is Running");
});
