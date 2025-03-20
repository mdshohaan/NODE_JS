const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(middlewar);

// User Router
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("I am Login");
});
router.get("/logout", (req, res) => {
  res.send("I am Logout");
});
router.get("/signup", (req, res) => {
  res.send("I am signup");
});

app.use("/user", router);

app.get("/", (req, res) => {
  res.send("I am listening");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is Running");
});
