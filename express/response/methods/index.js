const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send("Hello Test");
});

app.get("/about", (req, res) => {
  // res.format({
  //   "text/plain": () => {
  //     res.send("hi");
  //   },
  //   "text/html": () => {
  //     res.render("pages/about");
  //   },
  //   "application/json": () => {
  //     res.json({
  //       name: "Bangladesh",
  //     });
  //   },
  //   default: () => {
  //     res.status(403).send("Not Acceptable");
  //   },
  // });
  // res
  //   .cookie("irfan", {
  //     domain: "example.com",
  //     secure: true,
  //   })
  //   .end();
  // res.redirect("/test");
  // res.end();
});

app.listen(3000, () => {
  console.log("Server is Running");
});
