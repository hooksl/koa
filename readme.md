自动启动配置文件 nodemon
npm i nodemon

添加启动命令
package.json中  dev替换成别的也可以

"scripts": {
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1",
    "dev": "nodemon ./src/main.js"
  },
之后在控制台执行命令 npm run dev 就可以启动了。并且当我们改动代码，他也会自动的重启。


读取配置文件


目录结构优化

将用户处理抽离到controller

安装koa-body包

操作数据库处理
curl -X POST -d '{ "id":"3", "provinceId":"3"}' -H "Content-Type: application/json" http://127.0.0.1:8001/users/register

写入数据库
curl -X POST -d '{ "user_name":"elfds", "password":"3111"}' -H "Content-Type: application/json" http://127.0.0.1:8001/users/register


加入验证


抽离出用户名或密码为空
curl -X POST -d '{ "user_name":"", "password":"3111"}' -H "Content-Type: application/json" http://127.0.0.1:8001/users/register
curl -X POST -d '{ "user_name":"nihao", "password":""}' -H "Content-Type: application/json" http://127.0.0.1:8001/users/register

