const express = require('express')
const app = express()
// 模型对象的集合
const models = require("../models")

models.Content.sync()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/createUser', async (req, res) => {
    let { name, email } = req.query

    /** User 是一个经过 sequelize 封装过的对象 */
    let User = await models.User.create({
        firstName: name.split(' ')[0],
        lastName: name.split(' ')[1],
        email: email
    })

    console.log(User)

    res.json({
        message: User ? 'success' : 'failed',
        data: User
    })
})

/**
 * 使用 findAll 寻找一组数据
 */
app.get('/list', async (req, res) => {
    let list = await models.User.findAll()

    res.json({
        list
    })
})

/**
 * 使用 findAll 寻找一组数据
 */
app.get('/course', async (req, res) => {
    let list = await models.Course.findAll()

    res.json({
        list
    })
})

/**
 * 使用 findOne API 寻找单个数据
 */
app.get('/detail/:id', async (req, res) => {
    const { id } = req.params

    let User = await models.User.findOne({
        where: {
            id
        }
    })

    res.json({
        User
    })
})


app.listen(3000)