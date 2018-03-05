/**
 * Created by ZZl.
 * DateTime: 2018/3/5 11:21
 * desc:User
 */
const User = require('../model/User');

module.exports = {
    formatResult(data) {
        if (data.length > 0) {
            let result = [];
            data.forEach((item, index) => {
                if (item.hasOwnProperty('dataValues')) {
                    result.push(item.dataValues);
                }
            });
            return result;
        } else if (data.hasOwnProperty('dataValues')) {
            return data.dataValues
        } else {
            return 'no data';
        }
    },
    async create(user) {
        try {
            let data = await User.create(user);
            return this.formatResult(data);
        }
        catch (err) {
            console.log('插入新数据失败', err);
        }
    },
    async findAll(params) {
        try {
            let data = await User.findAll({where: params});
            return this.formatResult(data);
        }
        catch (err) {
            console.log('查找数据失败', err);
        }
    },
    async findOne(params) {
        let data = await User.findOne({
            where: params
        });
        return this.formatResult(data);
    }
};
