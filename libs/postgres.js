const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "zaiko_admin",
  password: "zaiko_pass",
  database: "zaiko_db",
});

module.exports = pool;
