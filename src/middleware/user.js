const userValidator = async (ctx, next) => {
    const { user_name, password } = ctx.request.body
    // 合法性
    if (!user_name || !password) {
        console.log('用户名或密码为空', ctx.request.body)
        ctx.status = 400
        ctx.body = {
            code: '10001',
            messgae: '用户名或密码为空',
            result: ''
        }
        // 如果用户名或密码为空 就返回
        return
    }
    // 否则放行向下执行
    await next()
}

const { getUserInfo } = require('../service/user')
const verifyUser = async (ctx, next) => {
    // 合理性
    const { user_name } = ctx.request.body
    if (await getUserInfo({ user_name })) {
        ctx.status = 409
        ctx.body = {
            code: '10002',
            messgae: '用户已存在',
            result: ''
        }
        return
    }
    await next()
}

module.exports = {
    userValidator,
    verifyUser
}
