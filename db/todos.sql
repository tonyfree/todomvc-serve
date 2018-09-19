set sql_safe_updates=0;

select * from todosdb.todos;

insert into todosdb.todos(id,name,completed) values(null,'vuex',0);

update todosdb.todos set name='vue-router' where id=3;

update todosdb.todos set completed=1 where id=3;

update todosdb.todos set completed=1 where completed=0;

delete from todosdb.todos where id=8;

delete from todosdb.todos where completed=1;