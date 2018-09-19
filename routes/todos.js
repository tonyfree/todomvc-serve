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

router.post('/toggle', function(req, res, next) {
  var param = req.body;
  pool.getConnection(function(err, connection) {
    connection.query(todosSQL.toggle, [param.completed, param.id], function(err, result) {
      if (result) {
        res.json({
          message: '修改状态成功'
        });
      }
      connection.release();
    });
  })
});

router.post('/toggleAll', function(req, res, next) {
  var param = req.body;
  pool.getConnection(function(err, connection) {
    connection.query(todosSQL.toggleAll, [param.after, param.before], function(err, result) {
      if (result) {
        res.json({
          message: '修改全部状态成功'
        });
      }
      connection.release();
    });
  })
});

router.post('/edit', function(req, res, next) {
  var param = req.body;
  pool.getConnection(function(err, connection) {
    connection.query(todosSQL.edit, [param.name, param.id], function(err, result) {
      if (result) {
        res.json({
          message: '修改name成功'
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

router.post('/clearCompleted', function(req, res, next) {
  var param = req.body;
  pool.getConnection(function(err, connection) {
    connection.query(todosSQL.clearCompleted, function(err, result) {
      if (result) {
        res.json({
          message: '删除completed成功'
        });
      }
      connection.release();
    });
  })
});

module.exports = router;
