const express = require('express')
const router = express.Router()

/**
 * 3、express 中路由级别中间件的使用
 */


/** 场景 1 */
router.use((req, res, next) => {
    console.log('hihi')
    next()
})

const ValidLogin = (req, res, next) => {
    const { name, password } = req.query
    if (!name || !password) {
        res.json({
            message: '登录参数错误',
            code: '0001'
        })
    } else {
        /** 使用中间件过程中，可以通过修改 req、res 对象来向下流过程中的中间件传递数据 */
        req.customData = {
            name,
            password
        }
    }

    next()
}

/** 场景 2 某个路由内部使用 使用数组指定使用一组中间件 */
router.get('/login', [ValidLogin], (req, res, next) => {
    const { customData } = req
    res.json({
        name: 'qihsi',
        data: customData
    })
})

router.get('/demo', (req, res, next) => {
    res.json({
        data: 'das'
    })
})


module.exports = router