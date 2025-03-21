const express = require("express");
const morgan = require("morgan");
const contactRoute = require("./contactRoute");
const app = express();

// middleware
app.use(morgan("dev"));

// Contact Routes
app.use("/contact", contactRoute);

app.get("*", (req, res) => {
  res.send("Plse use the Correct Routes");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is Running");
});
