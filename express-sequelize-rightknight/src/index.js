const express = require('express')

const app = express()

// 模型对象的集合
const models = require("../models")


app.get('/demo', async (req, res) => {
    const list = await models.feedback.findAll()

    res.json({
        code: '0000',
        message: '访问成功',
        list
    })
})

/**
 * 删除 feedback 表
 */
app.post('/delfeedback', async (req, res) => {
    try {
        await models.feedback.drop();
        res.json({
            code: '0000',
            message: '删除成功'
        })
    } catch (error) {
        res.json({
            message: error.message,
            code: '500'
        })
    }
})

/**
 * 给 feedback 表中添加一条数据
 */
app.post('/add/:author_id/:content/:replay', async (req, res) => {
    const { author_id, content, replay } = req.params

    try {
        const item = await models.feedback.create({
            author_id,
            content,
            replay
        })

        res.json({
            message: 'success',
            code: '0000',
            data: item.dataValues
        })
    } catch (error) {
        res.json({
            message: error.message,
            code: '500'
        })
    }
})

app.get('/getcount', async (req, res) => {
    const result = await models.sequelize.query("SELECT A.TABLE_NAME 'table_name',A.COLUMN_NAME 'column_name',A.DATA_TYPE 'column_type',A.COLUMN_COMMENT 'column_comment' FROM INFORMATION_SCHEMA.COLUMNS A WHERE A.TABLE_SCHEMA='rights_new' ORDER BY A.TABLE_SCHEMA,A.TABLE_NAME,A.ORDINAL_POSITION", { type: models.sequelize.QueryTypes.SELECT })

    const tableStructure = groupBy(result)

    res.json({
        tableStructure
    })
})

/**
 * 将数据库表字段按照每张表分组
 * @param {Array} array 
 */
function groupBy(array) {
    let result = {}

    array.forEach(item => {
        let name = item.table_name

        if (!result[name]) {
            result[name] = []
        }

        result[name].push(Object.assign({}, item))
    });

    return result
}

app.listen(3000)