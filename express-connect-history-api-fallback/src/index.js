const path = require('path');
const express = require('express');

// 导入处理 history 模式的模块
const history =  require('connect-history-api-fallback')

const app = express()

// 使用 connect-history-api-fallback 中间件来处理 history 模式下刷新页面导致的 404 报错问题
app.use(history()) // 注释掉这句，刷新页面而且浏览器中地址不是http://localhost:3000/时，就会报错 404 错误


// 处理静态资源的中间件，将 web 目录作为网站的根目录
app.use(express.static(path.join(__dirname, '../web')))

app.listen(3000)