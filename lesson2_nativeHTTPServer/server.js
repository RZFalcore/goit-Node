const http = require("http");
const fs = require("fs").promises;
const path = require("path");
const url = require("url");
const querystring = require("querystring");

const TypeMime = {
  ".html": "text/html",
  ".htm": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpg",
  ".ico": "image/x-icon",
};

http
  .createServer(async (req, res) => {
    const URL = new URL(req.url);
    const pathname = URL.pathname;
    let filename = pathname.substring(1);
    res.write("Hello!");
    res.end();
  })
  .listen(3000, () => console.log("Server running on port:3000"));
