const { createUser } = require('../db/user')
// 写成一个类
class UserController {
    async register(ctx, next) {
        // 1.获取数据
        console.log(ctx.request.body)
        const { usesr_name, password } = ctx.request.body
        // 2.操作数据库
        const res = await createUser(usesr_name, password)
        console.log(res)
        // 3.返回给客户端
        ctx.body = ctx.request.body
    }
    async login(ctx, next) {
        ctx.body = '用户登录'
    }
}

// 导出实例化的对象
module.exports = new UserController()
