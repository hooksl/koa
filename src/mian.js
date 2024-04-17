
// 解构出 APP_PORT
const { APP_PORT } = require('./config/config')
const app = require('./app/index')

app.listen(APP_PORT, () => {
    console.log(`server is running on ${APP_PORT}`)
})
