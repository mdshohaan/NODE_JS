const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json()); // parser
app.use(cookieParser());
const adminRoute = express.Router();

// Sub App
adminRoute.get("/dashboard", (req, res) => {
  console.log(req.originalUrl);
  res.send("We are in Admin Route");
});

// Main App
app.use("/admin", adminRoute);

app.get("/user/:id", (req, res) => {
  console.log(req.query);
  res.send("Hello world");
});

app.post("/user", (req, res) => {
  console.log(req.route);
  res.send("Hello world post");
});

app.listen(3000, () => {
  console.log("Server is Running");
});

// in sub app the req.url chnage
