/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 */

// dependencies
const http = require("http");
const url = require("url");
const { StringDecoder } = require("string_decoder");

// module scafolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log("Server Running");
  });
};

// handle Reqest and Response
app.handleReqRes = (req, res) => {
  // Request handling
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;
  const trimPath = pathName.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObj = parsedUrl.query;
  const headersObj = req.headers;

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);

    res.end("Hello world");
  });

  // Response handle
};

// start server
app.createServer();
