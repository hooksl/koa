// 引入我们写好的model
const User = require('../model/user')
class UserService {
    // 因为存入数据库 是异步的
    async createUser(user_name, password) {
        // 当我们属性名和传过来的值一致的时候可以简写
        // await表达式: 返回成功promise对象的值
        const res = await User.create({
            user_name: user_name,
            password: password
        })
        console.log(res)
        //    返回到controller
        return res
    }
}
// 导出后 在控制器controller中使用
module.exports = new UserService()

