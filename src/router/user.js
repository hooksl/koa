const Router = require('koa-router')

const router = new Router({ prefix: '/users' })

// 会和 /users拼接
router.get('/', (ctx, next) => {
    ctx.body = 'hello users'
})
// 导出
module.exports = router
