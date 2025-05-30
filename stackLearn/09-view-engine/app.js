const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("view engine", "ejs");
// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Routes

app.get("/", (req, res) => {
  let post = {
    title: "Test Title",
    body: "Test Body",
    published: false,
  };
  res.render("pages/index", { title: "EJS is Awesome Template Engine", post });
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});
app.get("/help", (req, res) => {
  res.render("pages/help");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is Running");
});
