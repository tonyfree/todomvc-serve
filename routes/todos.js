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
  var param = req.body;
  pool.getConnection(function(err, connection) {
    connection.query(todosSQL.insert, [null, param.name, param.completed], function(err, result) {
      if (result) {
        res.json({
          message: '添加成功'
        });
      }
      connection.release();
    });
  })
});

router.post('/update', function(req, res, next) {
  var param = req.body;
  pool.getConnection(function(err, connection) {
    connection.query(todosSQL.update, [param.name, param.completed, param.id], function(err, result) {
      if (result) {
        res.json({
          message: '修改成功'
        });
      }
      connection.release();
    });
  })
});

router.post('/delete', function(req, res, next) {
  var param = req.body;
  pool.getConnection(function(err, connection) {
    connection.query(todosSQL.delete, [param.id], function(err, result) {
      if (result) {
        res.json({
          message: '删除成功'
        });
      }
      connection.release();
    });
  })
});

module.exports = router;
