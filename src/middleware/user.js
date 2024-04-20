const { userFormateError, userAlreadyExisted } = require('../constant/err_type')

const userValidator = async (ctx, next) => {
    const { user_name, password } = ctx.request.body
    // 合法性
    if (!user_name || !password) {
        console.log('用户名或密码为空', ctx.request.body)
        // 如果用户名或密码为空 就返        // 封装了错误信息 ctx.app.emit在提示错误信息时使用
        ctx.app.emit('error', userFormateError)
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
        ctx.app.emit('error', userAlreadyExisted)
        return
    }
    await next()
}

module.exports = {
    userValidator,
    verifyUser
}
