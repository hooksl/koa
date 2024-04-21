//注意 createUser是异步函数
const { createUser } = require('../service/user')
const jwt = require("jsonwebtoken");
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
        const { user_name } = ctx.request.body
        // ctx.body = `欢迎回来${user_name}`
        const token = jwt.sign(
            {
                name: user_name
            },
            "Gopal_token", // secret
            { expiresIn: '1h' } // 有效期1小时 
        )
        ctx.body = {
            code: 0,
            messgae: '登陆成功',
            user_name: user_name,
            token: token
        }

    }
}

// 导出实例化的对象
module.exports = new UserController()

