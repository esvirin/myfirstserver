const fs = require("fs");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "hGjRoU3ToiPpWCgp",
  database: "node-study",
});

module.exports = function (request, response) {
  let body = new String();
  request.on("data", (chunk) => {
    body += chunk.toString();
  });
  request.on("end", () => {
    connection.connect((err) =>
      err ? console.log(err) : console.log("data-base connected")
    );

    connection.query("SELECT * FROM `users`", function (error, result, fields) {
      if (error) {
        response.writeHead(404);
        response.write("data not found");
        console.log("error 404");
        response.end();
      } else {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(result));
        console.log("response 200");
        response.end();
      }
    });

    connection.end();
    response.end();
  });
};
