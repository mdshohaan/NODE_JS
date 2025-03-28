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

const myMiddleware = (req, res, next) => {
  console.log("I am logging ");
  next();
};
app.use(myMiddleware);

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(3000, () => {
  console.log("Server is Running");
});
