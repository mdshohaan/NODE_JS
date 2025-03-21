const express = require("express");
const morgan = require("morgan");
const contactRoute = require("./contactRoute");
const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact Routes
app.use("/contacts", contactRoute);

app.get("*", (req, res) => {
  res.send("Please use the Correct Routes");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is Running");
});
