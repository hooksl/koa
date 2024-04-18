const { Sequelize } = require('sequelize')
/**
 * database
 * username
 * password
 */
const seq = new Sequelize('', 'root', '123456', {
    host: 'localhost',
    // 数据库类型
    dialect: 'mysql'
})
// 返回值是一个promise对象
seq.authenticate().then(() => {
    console.log('数据库连接成功')
}).catch(err => {
    console.log('数据库连接失败', err)
})

module.exports = seq
