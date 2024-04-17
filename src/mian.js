const Koa = require('koa')
// 解构出 APP_PORT
const { APP_PORT } = require('./config/config.default')

const app = new Koa()

app.use((ctx, next) => {
    ctx.body = 'hello world'
})
app.listen(APP_PORT, () => {
    console.log(`server is running on ${APP_PORT}`)
})
