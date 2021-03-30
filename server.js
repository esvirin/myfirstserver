const http = require("http");
const fs = require("fs");
const path = require("path");
const sendResponse = require("./extensions/sendResponse");
const getContentType = require("./extensions/getContentType");
const uploadData = require("./extensions/uploadData");
const downloadData = require("./extensions/downloadData");

const connect = http
  .createServer((request, response) => {
    switch (request.url) {
      case "/":
        sendResponse("index.html", "text/html", response);
        break;

      case "/upload":
        uploadData(request, response);
        break;

      case "/download":
        downloadData(response);
        break;

      default:
        sendResponse(request.url, getContentType(request.url), response);
        break;
    }
  })
  .listen(3000, (er) => (er ? console.log(er) : console.log("server created")));
