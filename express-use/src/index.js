const express = require('express')
const app = express()

const homeRouter = require('./home.route')
const pageRouter = require('./page.route')

/**
 * 概要：介绍 app.use 的使用，app.use 是使用 express 中间件的关键
 * 问题：如何做路由的拆分？如下，将路由分别拆分到 home 和 page
 * 所有在 home.route.js 中书写的路由都归属在 /home 下
 * 所有在 page.route.js 中书写的路由都划归在 /page 下
 * 实现方式：app.use 结合 express.Router()
 */
app.use('/home', homeRouter)
app.use('/page', pageRouter)


app.listen(3000)