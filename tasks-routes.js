var express = require("express");
// var inMemoryDatabase = require("./in-memory-database");
var pool = require("./pg-connection-pool.js")
var router = express.Router();

// var tasksDb = inMemoryDatabase();
// tasksDb.init([
//     { text: "Feed the cats" }
// ]);

router.get("/tasks", function(req, res) {
  pool.query("SELECT * FROM todos").then(function(result) {
res.send(result.rows);
});
});

router.post("/tasks", function(req, res) {
  var todo = req.body; // <-- Get the parsed JSON body
  var sql = "INSERT INTO todos(task) " +
  "VALUES ($1::text)";
  var values = [todo.text];
  console.log(todo);
  pool.query(sql, values).then(function(result) {
  res.status(201); // 201 Created
  res.send(result.rows);
  });


});

router.delete("/tasks/:id", function(req, res) {
    var id = req.params.id;
    console.log(id);
    var sql = "DELETE FROM todos WHERE id=$1::int";
    var values = [id];
    pool.query(sql, values).then(function(result){
    res.status(201);
    res.send(result.rows);
  });
});

module.exports = router;
