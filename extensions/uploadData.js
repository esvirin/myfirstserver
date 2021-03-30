const fs = require("fs");

module.exports = function (request, response) {
  let body = new String();
  request.on("data", (chunk) => {
    body += chunk.toString();
  });
  request.on("end", () => {
    fs.appendFileSync("users.json", body + ",", (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

    response.end();
  });
};
