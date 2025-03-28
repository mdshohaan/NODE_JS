/**
 * @Title middleware:
 * executes any code
 * can change req and res object
 * can end req and res object
 * call next middleware by next()
 * throw catch and errors
 */

const express = require("express");
const app = express();
const adminRouter = express.Router();

const logger = (req, res, next) => {
  console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} `);
  next();
  throw new Error("This is an Error");
};

adminRouter.use(logger);

adminRouter.get("/dashboard", (req, res) => {
  res.send("Admin Dashboard");
});

app.use("/admin", adminRouter);

app.get("/about", (req, res) => {
  res.send("About page");
});

// error handler
const errorMiddleware = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("There was a server side error!");
};
adminRouter.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server is Running");
});
