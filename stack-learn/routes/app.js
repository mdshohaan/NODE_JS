const express = require("express");
const morgan = require("morgan");
const app = express();
const userRouter = require("./userRoute");
const postRoute = require("./postRoute");

app.use(morgan("dev"));

// User Router
app.use("/user", userRouter);
// Post Rouute
app.use("/posts", postRoute);

app.get("/", (req, res) => {
  res.send("I am listening");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is Running");
});
