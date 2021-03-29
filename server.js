const http = require("http");
const fs = require("fs");
const path = require("path");
const sendResponse = require("./sendResponse");

const connect = http
  .createServer((request, response) => {
    if (request.url === "/") {
      sendResponse("index.html", "text/html", response);
    }
  })
  .listen(3000, (er) => (er ? console.log(er) : console.log("server created")));
