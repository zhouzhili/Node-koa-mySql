/**
 * Created by ZZl.
 * DateTime: 2018/3/5 10:29
 * desc:user模型
 */
const DataTypes = require('sequelize').DataTypes;
const mySql = require('../db/mySql');
module.exports = mySql.define('user', {
    Id: {
        type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, unique: true
    },
    userName: {type: DataTypes.STRING, allowNull: false},
    passWord: {type: DataTypes.STRING, allowNull: false}
}, {
    timestamps: false,
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});