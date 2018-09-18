var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var config = require('../db/config');
var todosSQL = require('../db/todosSql');
var pool = mysql.createPool( config.mysql );

router.get('/list', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    connection.query(todosSQL.queryAll, function(err, result) {
      res.json(result);
      connection.release();
    });
  })
});

router.post('/add', function(req, res, next) {
  var param = req.query || req.params;
  pool.getConnection(function(err, connection) {
    connection.query(todosSQL.insert, [null, param.todo, param.completed], function(err, result) {
      res.json(result);
      connection.release();
    });
  })
});

router.post('/update', function(req, res, next) {
  var param = req.query || req.params;
  pool.getConnection(function(err, connection) {
    connection.query(todosSQL.update, [param.todo, param.completed, param.id], function(err, result) {
      res.json(result);
      connection.release();
    });
  })
});

router.post('/delete', function(req, res, next) {
  var param = req.query || req.params;
  pool.getConnection(function(err, connection) {
    connection.query(todosSQL.delte, [param.id], function(err, result) {
      res.json(result);
      connection.release();
    });
  })
});

module.exports = router;
