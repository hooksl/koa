const Router = require('koa-router')
const { register } = require('../controller/user')
// 引入中间件
const { userValidator } = require('../middleware/user')
const router = new Router({ prefix: '/users' })

// 导// 注册接口
router.post('/register', userValidator, register)

// 导出出
module.exports = router
