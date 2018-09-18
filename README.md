### Mysql
+ 安装
+ 创建数据库：TodosDB
+ 创建Table：todos
```sql
CREATE SCHEMA `todosdb` ;

CREATE TABLE `todosdb`.`todos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `todo` VARCHAR(45) NOT NULL,
  `completed` INT(2) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`));
```

### Express
```
yarn global add express express-generator

express todomvc
```

### 连接mysql
+ 