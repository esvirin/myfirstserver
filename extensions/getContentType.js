const path = require("path");

module.exports = function (url) {
  switch (path.extname(url)) {
    case ".html":
      return "text/html";
      break;
    case ".css":
      return "text/css";
      break;
    case ".js":
      return "text/javascript";
      break;
    case ".json":
      return "application/json";
      break;
    default:
      "octate-stream";
      break;
  }
};
