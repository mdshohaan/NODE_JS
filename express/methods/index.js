const express = require("express");
const app = express();

app.set("view engine", "ejs");

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

app
  .route("/about/mission")
  .get((req, res) => {
    res.render("./pages/index");
  })
  .post((req, res) => {
    res.send("Welcome to application Post");
  })
  .put((req, res) => {
    res.send("Welcome to application Put");
  });

app.listen(3000, () => {
  console.log("Server is Running");
});
