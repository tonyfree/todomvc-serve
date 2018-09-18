var TodosSQL = {
  queryAll: 'select * from Todos',
  insert: 'insert into Todos(id,name,completed) values(?,?,?)',
  update: 'upate Todos set name=?,completed=? where id=?',
  delete: 'delete from todos where id=?'
};
module.exports = TodosSQL;