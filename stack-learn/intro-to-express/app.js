const express = require("express");
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

function customMiddleware(req, res, next) {
  console.log("I am Middlewar");
  next();
}
const a = [];

function tinyLogger() {
  return (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  };
}

app.get("/", (req, res) => {
  res.send("I am listening");
});

app.get("*", (req, res) => {
  res.send("I am Not Found");
});

app.listen(PORT, () => {
  console.log("Server is Running");
});
