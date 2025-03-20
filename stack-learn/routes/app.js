const express = require("express");
const morgan = require("morgan");
const app = express();
const userRouter = require("./userRoute");
const postRoute = require("./postRoute");

// middleware
app.use(morgan("dev"));

// User Router
app.use("/user", userRouter);
// Post Router
app.use("/posts", postRoute);

// Dynamic Router using Parameter
app.get("/products/:prodId/reviews/:revId", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

// Default Route
app.get("/", (req, res) => {
  res.send("I am listening");
});

// Port Listeninng
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is Running");
});
