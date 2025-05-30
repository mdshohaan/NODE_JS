const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("<h1>Hello Node JS</h1>");
});

server.listen(3000, () => {
  console.log("Server Running");
});
