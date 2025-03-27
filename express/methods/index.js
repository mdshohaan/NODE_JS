const express = require("express");
const app = express();

app.enable("case sensitive routing");
app.disable("case sensitive routing");

app.param("id", (req, res, next, id) => {
  const user = {
    userId: id,
    name: "Bangladesh",
  };
  req.userDetails = user;
  next();
});

app.all("/user/:id", (req, res) => {
  console.log(req.userDetails);
  res.send("Welcome to application");
});

app.listen(3000, () => {
  console.log("Server is Running");
});
