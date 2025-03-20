const router = require("express").Router();
const {
  getAllPosts,
  getSinglePost,
  createNewPost,
  updatePost,
  deletePost,
} = require("./postController");

// Example.com/get GET
router.get("/", getAllPosts);
router.get("/:postId", getSinglePost);

// Example.com/posts POST
router.post("/", createNewPost);

// Example.com/update PUT
router.put("/:postId", updatePost);

// Example.com/delete DELETE
router.delete("/:postId", deletePost);

module.exports = router;

// ✨ referrence কোথায় দরকার হয়???
// ✅ ফাংশনকে আর্গুমেন্ট হিসেবে পাঠানোর সময়
// ✅ কোনো ফাংশনকে অন্য নামে স্টোর করার সময়
// ✅ টাইমার বা ইভেন্ট হ্যান্ডলারের জন্য
