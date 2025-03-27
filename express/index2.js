const express = require("express");
const handle = require("./handle");

// middleware
const app = express();
const admin = express();

// admin.on("mount", function (parent) {
//   console.log("Admin Mounted");
//   console.log(parent); // refers to the parent app
// });

app.locals.title = "Irfanul Islam";

app.use("/admin", admin);

admin.get("/dashboard", (req, res) => {
  console.log(admin.mountpath); // get Route path
  res.send("Welcome to admin Dashboard");
});

app.get("/", (req, res) => {
  res.send("Welcome to application");
});

app.listen(3000, () => {
  console.log("Server is Running");
});
