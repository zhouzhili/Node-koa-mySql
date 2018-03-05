/**
 * Created by ZZl.
 * DateTime: 2018/3/5 10:31
 * desc:数据库连接
 */
const Sequelize = require('sequelize');
let sequelize = new Sequelize('mytest', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    //不使用任何字符串别名
    operatorsAliases: false
});
module.exports = sequelize;