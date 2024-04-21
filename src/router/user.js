const Router = require('koa-router')
const { register, login } = require('../controller/user')
// 引入中间件
const { userValidator, verifyUser, cryptPassword, verifyLogin } = require('../middleware/user')
const router = new Router({ prefix: '/users' })

// 注册接口
router.post('/register', userValidator, verifyUser, cryptPassword, register)

// 登录接口
router.post('/login', userValidator, verifyLogin, login)

router.post('/verifyToken', async (ctx, next) => {
    ctx.body = {
        code: 0,
        messgae: '验证成功',
    }
    await next()
})
// 导出
module.exports = router
