exports.getAllPosts = (req, res) => {
  // http://localhost:3000/posts?category=tech&meta=10
  // Get the query and destructuring
  let { category, meta } = req.query;
  res.send("Render All posts  ");
};

exports.getSinglePost = (req, res) => {
  res.send("Render All posts =" + req.params.postId);
};

exports.createNewPost = (req, res) => {
  res.send("Create New Posts");
};

exports.updatePost = (req, res) => {
  res.send("Update Your Exixting Post =" + req.params.postId);
};
exports.deletePost = (req, res) => {
  res.send("delete Your Post" + req.params.postId);
};
