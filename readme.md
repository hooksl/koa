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

抽离出用户已存在
curl -X POST -d '{ "user_name":"nihao", "password":"xxxx"}' -H "Content-Type: application/json" http://127.0.0.1:8001/users/register

常量中间件

错误监听

密码加密
npm i bycrptjs

    - 密码加密
    - 验证密码
    
中间件koa-jwt(包含了jsonwebtoken,用来生成token)
```sh
npm install koa-jwt
```
  jwt全称 JSON Web Token,由于三部分构成Header、Payload、Signature

```js
// 生成token
jwt = require("jsonwebtoken");
const token = jwt.sign(
        {
          name: result.name
        },
        "Gopal_token", // secret
        { expiresIn: '1h' } // 有效期1小时 
      );
// 验证token
const koajwt = require('koa-jwt');
koajwt({secret: 'Gopal_token'}).unless({ 
  path: [/\/api\/register/, /\/api\/login/] // 配置白名单
})
```

