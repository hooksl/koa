const Koa = require('koa')
const userRouter = require('../router/user')
const app = new Koa()

// 必须是一个函数
app.use(userRouter.routes())

module.exports = app
