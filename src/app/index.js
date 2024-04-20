const Koa = require('koa')
const userRouter = require('../router/user')
const { koaBody } = require('koa-body')
const errHandler = require('./errHandler')
const app = new Koa()

// 在注册路由前注册
app.use(koaBody())
// 必须是一个函数
app.use(userRouter.routes())
app.on('error', errHandler)
module.exports = app
