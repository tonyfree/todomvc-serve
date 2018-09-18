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

### Express
+ 用express-generator创建项目
```
yarn global add express express-generator

express todomvc
```

### 连接mysql
+ 安装mysql模块
```
yarn add mysql -S
```
+ 新增连接配置、sql语句、todos路由API
```
src
 ├── db
 |    ├── config.js    // mysql数据库连接配置
 |    └── todosSql.js  // sql语句
 ├── routes
      ├── todos.js     // api接口  
```
+ 入口新增todos路由API
```javascript
// app.js
var todosRouter = require('./routes/todos')

app.use('./todos', todosRouter)
```

### 跨域
```
yarn add cors -S
```
```javascript
// app.js
var cors = require('cors')

app.use(cors())
```

### 支持post
```
yarn add body-parser -S
```
```javascript
// api.js
var bodyParser = require('body-parser')

app.use(bodyParser.json())
```