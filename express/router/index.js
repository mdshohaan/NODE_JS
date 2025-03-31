const express = require("express");
const adminRouter = require("./adminRouter");
const publicRouter = require("./publicRouter");
const publicRouter2 = require("./publicrouter2");
const app = express();

app.use("/", publicRouter2);
app.use("/", publicRouter);
app.use("/admin", adminRouter);

app.listen(3000, () => {
  console.log("Server is Running");
});

// console.log("add all");
