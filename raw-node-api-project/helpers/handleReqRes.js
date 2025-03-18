/*
 *  Handle request and response
 */

const url = require("url");
const { StringDecoder } = require("string_decoder");

const handler = {};

handler.handleReqRes = (req, res) => {
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

module.exports = handler;
