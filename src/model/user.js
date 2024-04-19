// 解构出sequelize的DataTypes
const { DataTypes } = require('sequelize')
// 这是我们创建好的 连接数据库的
const seq = require('../db/seq')

// 创建模型   可以给表加前缀因为其自动化推断表名称，也可以让他不推断
const User = seq.define('User', {
    // id 自动创建
    user_name: {
        // 去问档查看
        type: DataTypes.STRING,
        // 约束是否为空
        allowNull: false,
        // 唯一
        unique: true,
        comment: '用户名 唯一'
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: '密码'
    },
    is_admin: {
        // boolean 就是 tinity(1)
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: '是否为管理员 0不是管理员'
    }
})
// force如果之前存在这张表 会删了重建 文档：模型重建  用过后要注释掉
User.sync({ force: true })
// User.sync() - 如果表不存在, 则创建该表(如果已经存在, 则不执行任何操作)
// User.sync({ force: true }) - 将创建表, 如果表已经存在, 则将其首先删除
// User.sync({ alter: true }) - 这将检查数据库中表的当前状态(它具有哪些列, 它们的数据类型等), 然后在表中进行必要的更改以使其与模型匹配.

module.exports = User
