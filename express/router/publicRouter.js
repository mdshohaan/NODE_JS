const express = require("express");
const publicRouter = express.Router();

publicRouter.get("/", (req, res) => {
  res.send("Homepage");
});
publicRouter.get("/about", (req, res) => {
  res.send("About");
});

module.exports = publicRouter;
