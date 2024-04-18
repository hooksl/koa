const { Sequelize } = require('sequelize')
const { MYSQL_DB, MYSQL_USER, MYSQL_PWD, MYSQL_HOST } = require('./../config/config')

/**
 * database
 * username
 * password
 */
const seq = new Sequelize(
    MYSQL_DB,
    MYSQL_USER,
    MYSQL_PWD,
    {
        host: MYSQL_HOST,
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
