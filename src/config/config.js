const dotenv = require('dotenv')

dotenv.config()
console.log(process.env.APP_PORT)
// process node的进程 
// env 环境变量
module.exports = process.env
