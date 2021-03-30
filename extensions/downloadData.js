const mysql = require("mysql2/promise");
const config = require("./db-config");

async function dataBase() {
  const connect = await mysql.createConnection(config);
  const [rows, fields] = await connect.execute("SELECT * FROM `users`");
  connect.end();
  return rows;
}

module.exports = async function (response) {
  const result = await dataBase();
  if (result) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(result));
    console.log("response 200");
    response.end();
  } else {
    response.writeHead(404);
    response.write("data not found");
    console.log("error 404");
    response.end();
  }
};
