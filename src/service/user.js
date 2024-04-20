const User = require('../model/user')
class UserService {
    // 因为存入数据库 是异步的
    async createUser(user_name, password) {
        console.log(user_name, password, "service")
        // 对象
        // User.create({
        //     user_name: user_name,
        //     password: password
        // })
        // 当我们属性名和传过来的值一致的时候可以简写
        // await表达式: 返回成功promise对象的值
        const res = await User.create({ user_name, password })
        console.log(res, "res")
        //    返回到controller
        return res
    }
    async getUserInfo({ id, user_name, password, is_admin }) {
        const whereOpt = {}
        // 短路运算
        id && Object.assign(whereOpt, { id })  // 不为空则添加到whereOpt中
        user_name && Object.assign(whereOpt, { user_name })
        password && Object.assign(whereOpt, { password })
        is_admin && Object.assign(whereOpt, { is_admin })

        const res = await User.findOne({
            attributes: ['id', 'user_name', 'password', 'is_admin'],
            where: whereOpt
        })
        return res ? res.dataValues : null
    }
}
// 导出后 在控制器controller中使用
module.exports = new UserService()
