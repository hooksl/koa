const Router = require('koa-router')
const { register } = require('../controller/user')
// 引入中间件
const { userValidator, verifyUser, cryptPassword } = require('../middleware/user')
const router = new Router({ prefix: '/users' })

// 注册接口
router.post('/register', userValidator, verifyUser, cryptPassword, register)

// 导出
module.exports = router
