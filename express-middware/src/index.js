const express = require('express')
const app = express()
const router = require('./router')
/**
 * express 的中间件是分级别的，通常来说，分为 app （应用级别）和 router（路由级别）和 error 级别
 */

app.use('/home', router)


app.listen(3000)