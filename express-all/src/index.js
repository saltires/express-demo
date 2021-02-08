/**
 * ① 以下是 express 最基础的用法，建立 get 和 post 请求，但不涉及与数据库交互
 * ② 这里用到了“/home/:time”，这是一种使用路由中的 url 参数的方式
 */
const express = require('express')
const app = express()

/**
 * ① app.get 只支持 get 请求，app.post 只支持 post 请求，
 * 如果希望客户端无论使用何种请求方式（get、post、delete、put 等等）都能获得响应，
 * 这时需要使用 app.all
 */
app.all('/all', (req, res) => {
    res.json({
        data: 'demo data',
        method: req.method
    })
})

/**
 * 无论客户端使用什么 url 去访问，都能响应用户的请求？如何实现？
 */
app.all('*', (req,res) => {
    res.json({
        data: 'all url can i reply',
        method: req.method,
        url: req.path
    })
})

app.listen(3000)