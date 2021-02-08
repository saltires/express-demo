/**
 * ① 以下是 express 最基础的用法，建立 get 和 post 请求，但不涉及与数据库交互
 * ② 这里用到了“/home/:time”，这是一种使用路由中的 url 参数的方式
 */
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/home/:time', function (req, res) {
    let { time } = req.params

    res.json({
        name: 'home',
        data: {
            location: 'Europen Finance city',
            price: '3000',
            time
        }
    })
})

/**
 * query 参数
 * 当访问的地址是：/user?time=100，这里从 req.query 解构出来的 time 就是 100
 */
app.get('/user', function (req, res) {
    let { time } = req.query

    res.json({
        name: 'home',
        data: {
            time
        }
    })
})

app.post('/cast/:type', (req, res) => {
    let { type } = req.params
    let data = {
        age: 20
    }

    switch (type) {
        case 'k':
            data.name = 'knight'
            break
        case 'p':
            data.name = 'politician'
            break
        default:
            data.name = 'default'
            break
    }

    res.json(data)
})


app.listen(3000)