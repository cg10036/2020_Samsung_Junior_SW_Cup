const mysql = require("mysql");
const config = require("./db_config");

module.exports = () => {
  return {
    init: () => {
      return mysql.createConnection({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.database,
      });
    },
    connect: (conn) => {
      conn.connect((err) => {
        if (err) throw err;
      });
    },
  };
};

/*
user
  id varchar(20),
  name varchar(20),
  resident varchar(20),
  salt varchar(20),
  iv varchar(100),
  encBCKey varchar(500),
  BCKey varchar(500),
  address varchar(500),
  isAdmin int // 0: false, 1: true
*/
