const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Render All posts");
});
router.post("/", (req, res) => {
  res.send("Create New Posts");
});

module.exports = router;
