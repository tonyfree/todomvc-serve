### MongoDB准备
+ 运行MongoDB服务器
```shell
C:\mongodb\bin\mongod --dbpath C:\mongodb\data\db
```
+ 链接MongoDB
```shell
C:\mongodb\bin\mongo.exe
```
+ 创建数据库todosdb，创建集合todos
```shell
use todosdb
db.todos.insert({"name":"todos"})
```
> use在数据库存在时切换，不存在时创建，插入文档时会自动创建集合

### 用express-generator创建项目
```
yarn global add express express-generator

express todomvc
```

### 连接MongoDB
+ 安装mongoose模块
```
yarn add mongoose -S
```
+ 新增连接配置、todos路由API
```
src
 ├── db
 |    └── config.js    // MongoDB数据库连接配置
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

### 参考文档
+ [mongoose文档](https://mongoosejs.com/docs/guide.html)
+ [MongoDB 教程](http://www.runoob.com/mongodb/mongodb-tutorial.html)