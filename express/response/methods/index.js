const express = require("express");
const app = express();

app.get("/about", (req, res) => {
  res.format({
    "text/plain": () => {
      res.send("hi");
    },
    "text/html": () => {
      res.render("pages/about");
    },
    "application/json": () => {
      res.json({
        name: "Bangladesh",
      });
    },
    default: () => {
      res.status(403).send("Not Acceptable");
    },
  });
});

app.listen(3000, () => {
  console.log("Server is Running");
});
