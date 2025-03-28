const express = require("express");
const publicRouter = express.Router();

const log = (req, res, next) => {
  console.log("I am Logging");
  next();
};

publicRouter.all("*", log);

publicRouter.param((param, option) => (req, res, next, val) => {
  if (val === option) {
    next();
  } else {
    res.sendStatus(403);
  }
});

publicRouter.param("user", "10");

// publicRouter.param("user", (req, res, next, id) => {
//   req.user = id === "1" ? "admin" : "Anonymous";
//   next();
// });

publicRouter.get("/:user", (req, res) => {
  res.send(`Hello ${req.user}`);
});

publicRouter.get("/about", (req, res) => {
  res.send("About");
});

module.exports = publicRouter;
