var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "ryvdxs57afyjk41z.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "pz4oq3sbc9ml3gf0",
  password: "szsd01lh4av75cle",
  database: "z1i0d97eggh32725",
  port:"3306"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
