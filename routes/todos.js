var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var config = require('../db/config');
var db = mongoose.createConnection(config.mongodb, { useNewUrlParser: true })
var monSchema = new mongoose.Schema({
  name: {type: String},
  completed: {type: Number, default: 0}
});
var Todo = db.model('Todo', monSchema);


router.get('/list', function(req, res, next) {
  Todo.find({}, function (err, bear) {
    if (err) res.send(err);
    res.json(bear);
  });
});

router.post('/add', function(req, res, next) {
  var param = req.body;
  var todo = new Todo({
    name: param.name,
    completed: param.completed
  })
  todo.save(function(err, result){
    if (err)  res.send(err);
    res.json({ message: '增加成功' });
  });
});

router.post('/toggle', function(req, res, next) {
  var param = req.body;
  Todo.updateOne({_id: param.id}, {completed: param.completed}, function (err, bear) {
    if (err) res.send(err);
    res.json({ message: '修改状态成功' });
  })
});

router.post('/toggleAll', function(req, res, next) {
  var param = req.body;
  Todo.updateMany({completed: param.before}, {completed: param.after}, function (err, bear) {
    if (err) res.send(err);
    res.json({ message: '修改全部状态成功' });
  })
});

router.post('/edit', function(req, res, next) {
  var param = req.body;
  Todo.updateOne({_id: param.id}, {name: param.name}, function (err, bear) {
    if (err) res.send(err);
    res.json({ message: '修改name成功' });
  })
});

router.post('/delete', function(req, res, next) {
  var param = req.body;
  Todo.deleteOne({
    _id: param.id
  }, function (err, bear) {
    if (err) res.send(err);
    res.json({ message: '删除成功' });
  })
});

router.post('/clearCompleted', function(req, res, next) {
  var param = req.body;
  Todo.deleteMany({completed: 1}, function (err, bear) {
    if (err) res.send(err);
    res.json({ message: '删除completed成功' });
  })
});

module.exports = router;
