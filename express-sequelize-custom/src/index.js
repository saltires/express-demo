const express = require('express')
const app = express()
const Users = require("./sequelize")

app.get('/user', async (req, res) => {
    const list = await Users.findAll()

    res.json({
        message: '測試',
        code: '0000',
        data: list
    })
})

app.listen(3000)