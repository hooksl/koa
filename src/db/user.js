class UserService {
    // 因为存入数据库 是异步的
    async createUser(user_name, password) {
        return '写入数据库'
    }
}
// 导出后 在控制器controller中使用
module.exports = new UserService()
