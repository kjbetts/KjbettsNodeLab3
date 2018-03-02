var pg = require("pg");
var pool = new pg.Pool({
user: "postgres",
password: "ravebuster",
host: "localhost",
port: 5432,
database: "TodoDB",
ssl: false
});

module.exports = pool;
