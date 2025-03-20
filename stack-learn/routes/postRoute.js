const router = require("express").Router();

// Example.com/get GET
router.get("/", (req, res) => {
  res.send("Render All posts");
});
router.get("/:postId", (req, res) => {
  res.send("Render All posts =" + req.params.postId);
});

// Example.com/posts POST
router.post("/", (req, res) => {
  res.send("Create New Posts");
});

// Example.com/update PUT
router.put("/:postId", (req, res) => {
  res.send("Update Your Exixting Post =" + req.params.postId);
});

// Example.com/delete DELETE
router.delete("/:postId", (req, res) => {
  res.send("delete Your Post" + req.params.postId);
});

module.exports = router;
