var TodosSQL = {
  queryAll: 'select * from Todos',
  insert: 'insert into Todos(id,todo,completed) values(?,?,?)',
  update: 'upate Todos set todo=?,completed=? where id=?',
  delete: 'delete from Todos where id=?'
};
module.exports = TodosSQL;