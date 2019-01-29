// Dependencies
var mysql = require("mysql");

var connection;
// Connect with JawsDB database on our Heroku app
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  // if not by Heroku, then local connection
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "koshatina8",
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
