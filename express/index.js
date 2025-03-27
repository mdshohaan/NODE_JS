const express = require("express");
const app = express();
const router = express.Router({
  caseSensitive: true,
});

// middleware
// app.use(express.json());
// app.use(express.raw());
// app.use(express.text());
// app.use(
//   express.static(`${__dirname}/public/`, {
//     index: "index.html",
//   })
// );

app.use(router);
router.post("/about", (req, res) => {
  // console.log(req.body);
  // console.log(req.body.toString());
  console.log(req.body);
  res.send("This is Homepage with post request");
});

app.listen(3000, () => {
  console.log("Server is Running");
});
