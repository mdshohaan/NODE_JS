const express = require("express");
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const app = express();

// custom middlewar
function customMiddleware(req, res, next) {
  console.log("I am Middlewar");
  next();
}

function tinyLogger() {
  return (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  };
}
const middlewar = [customMiddleware, tinyLogger()];

app.use(middlewar);

app.get("/", (req, res) => {
  res.send("I am listening");
});

app.get("*", (req, res) => {
  res.send("I am Not Found");
});

app.listen(PORT, () => {
  console.log("Server is Running");
});
