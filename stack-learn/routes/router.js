const router = require("express").Router();

router.get("/login", (req, res) => {
  res.send("I am Login");
});
router.get("/logout", (req, res) => {
  res.send("I am Logout");
});
router.get("/signup", (req, res) => {
  res.send("I am signup");
});

module.exports = router;
