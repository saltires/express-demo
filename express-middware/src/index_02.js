const express = require('express')
const app = express()
/**
 * express 的中间件是分级别的，通常来说，分为 app （应用级别）和 router（路由级别）和 error 级别
 */

/**
 * 1 自定义 app 级别中间件
 */
app.use((req, res, next) => {
    console.log('全局中间件对整个应用生效')
    next()
})

/**
 * 2 使用 express 内置的中间件之 static
 * @see https://expressjs.com/zh-cn/4x/api.html#express.static
 */
app.use(express.static('static', {
    extensions: ['html', 'jpg', 'png']
}))

app.get('/', (req, res) => {
    res.json({
        name: 'hihi'
    })
})

app.listen(3000)