/**
 * @介绍：介绍 express 中间件的使用
 * 中间件在 express 中的结构：
 * 1、是一个函数
 * 2、有 err、req、res、next 等参数
 * 3、中间件函数内部可以做的事：
 *   ① 处理异常、处理业务功能、
 *   ② 使用 next 转交控制权给下一个中间件、
 *   ③ 响应或者结束请求
 * 4、下面是一个自定义中间件验证请求参数是否包含 name 案例
 */

const express = require('express')
const app = express()

/**
 * 记住：express 中的中间件是函数，这里我们省略 err 参数
 */
const validNameMiddware = (req, res, next) => {
    const { name } = req.query

    if (!name || !name.length) {
        res.json({
            message: '缺少必要的参数 name',
            code: '001'
        })
    }

    /** 在中间件函数中，next 函数如果最后不调用，请求就会一直处于挂载中 */
    next()
}

app.all("*", validNameMiddware)

app.get('/demo', (req, res) => {
    res.json({
        name: 'test'
    })
})

app.listen(3000)