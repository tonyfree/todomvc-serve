# todomvc-serve

### Mysql准备
+ 创建数据库：TodosDB
+ 创建Table：todos
```sql
CREATE SCHEMA `todosdb` ;

CREATE TABLE `todosdb`.`todos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `completed` INT(2) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`));
```

### [express](https://github.com/tonyfree/todomvc-serve/tree/express)