const { userFormateError, userAlreadyExisted, userUnExist, userLoginError, invalidPassword } = require('../constant/err_type')

const userValidator = async (ctx, next) => {
    const { user_name, password } = ctx.request.body
    // 合法性
    if (!user_name || !password) {
        console.log('用户名或密码为空', ctx.request.body)
        // 如果用户名或密码为空 就返        // 封装了错误信息 ctx.app.emit在提示错误信息时使用
        ctx.app.emit('error', userFormateError, ctx)
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
        ctx.app.emit('error', userAlreadyExisted, ctx)
        return
    }
    await next()
}

const bcrypt = require('bcryptjs');
// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync("B4c0//", salt)

const cryptPassword = async (ctx, next) => {
    // 解构出密码
    const { password } = ctx.request.body
    const salt = bcrypt.genSaltSync(10)
    // 保存的是密文
    const hash = bcrypt.hashSync(password, salt)
    ctx.request.body.password = hash
    await next()
}
const verifyLogin = async (ctx, next) => {
    // 1.判断用户是否存在 不存在报错
    const { user_name, password } = ctx.request.body
    try {
        const res = await getUserInfo({ user_name })
        if (!res) {
            console.error('用户不存在', { user_name })
            ctx.app.emit('error', userUnExist, ctx)
            return
        }
        // 2.密码是否匹配 不匹配报错
        // compareSync 返回值是 true false
        if (!bcrypt.compareSync(password, res.password)) {
            ctx.app.emit('error', invalidPassword, ctx)
            return
        }
    } catch (err) {
        console.error(err)
        return ctx.app.emit('error', userLoginError)
    }

    await next()
}

module.exports = {
    userValidator,
    verifyUser,
    cryptPassword,
    verifyLogin
}
