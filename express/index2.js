const express = require("express");
const app = express();
const handle = require("./handle");

app.locals.title = "Irfanul Islam";

app.get("/", handle);

app.listen(3000, () => {
  console.log("Server is Running");
});
