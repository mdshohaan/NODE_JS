const express = require("express");
const publicRouter = express.Router();

const log = (req, res, next) => {
  console.log("I am Logging");
  next();
};

publicRouter.all("*", log);

publicRouter.get("/", (req, res) => {
  res.send("Homepage");
});
publicRouter.get("/about", (req, res) => {
  res.send("About");
});

module.exports = publicRouter;
