// 写成一个类
class UserController {
    async register(ctx, next) {
        ctx.body = '用户注册成功'
    }
}

// 导出实例化的对象
module.exports = new UserController()
