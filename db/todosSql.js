var TodosSQL = {
  queryAll: 'select * from todos',
  insert: 'insert into todos(id,name,completed) values(?,?,?)',
  toggle: 'update todos set completed=? where id=?',
  toggleAll: 'update todos set completed=? where completed=?',
  edit: 'update todos set name=? where id=?',
  delete: 'delete from todos where id=?',
  clearCompleted: 'delete from todos where completed=1'
};
module.exports = TodosSQL;