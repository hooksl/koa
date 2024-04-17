const Router = require('koa-router')
const { register } = require('../controller/user')
const router = new Router({ prefix: '/users' })

// 导// 注册接口
router.get('/register', register)

// 导出出
module.exports = router
