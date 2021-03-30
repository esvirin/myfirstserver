const fs = require("fs");
const path = require("path");

module.exports = function (url, type, response) {
  let file = path.join(__dirname, "../", url);
  console.log(file);
  fs.readFile(file, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.write("file not found");
      console.log("error 404");
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": type });
      response.write(content);
      console.log("response 200");
      response.end();
    }
  });
};
