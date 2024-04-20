//注意 createUser是异步函数
const { createUser, getUserInfo } = require('../service/user')
class UserController {
    async register(ctx, next) {
        // 1.获取数据
        console.log(ctx.request.body)
        const { user_name, password } = ctx.request.body
        // 2.操作数据库
        console.log(user_name, password, "user_name, password")
        const res = await createUser(user_name, password)
        console.log(res)
        // 3.返回给客户端
        ctx.body = {
            code: 0,
            messgae: '用户注册成功',
            user_name: res.user_name
        }
    }
    async login(ctx, next) {
        ctx.body = '用户登录'
    }
}

// 导出实例化的对象
module.exports = new UserController()

