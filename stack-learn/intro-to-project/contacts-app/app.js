const express = require("express");
const app = express();
const morgan = require("morgan");

// middleware
app.use(morgan("dev"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is Running");
});
