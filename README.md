Node代码仓库，学习koa2,以及数据库相关处理方法

* sequelize使用
1. 首先初始化sequelize，创建数据库连接
2. 首先定义model，使用sequelize.define()定义
3. 然后创建server，对数据进行增删改查
4. 可以使用async/await处理异步
5. 在查询条件中加上raw:true可以获取JSON格式的结果
6. 异常捕捉问题怎么优化集中处理有待解决