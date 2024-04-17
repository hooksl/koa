const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
    ctx.body = 'hello world'
})
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})
