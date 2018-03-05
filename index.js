/**
 * Created by ZZl.
 * DateTime: 2018/3/5 10:25
 * desc:
 */
const userService = require('./services/UserService');

userService.create({
    userName: 'new User',
    passWord: 'ewww'
}).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
});