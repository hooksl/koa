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
