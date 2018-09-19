var TodosSQL = {
  queryAll: 'select * from Todos',
  insert: 'insert into Todos(id,name,completed) values(?,?,?)',
  toggle: 'update Todos set completed=? where id=?',
  toggleAll: 'update Todos set completed=? where completed=?',
  edit: 'update Todos set name=? where id=?',
  delete: 'delete from todos where id=?',
  clearCompleted: 'delete from Todos where completed=1'
};
module.exports = TodosSQL;