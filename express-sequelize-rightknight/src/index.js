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
    const tableStructure = await init()

    res.json(tableStructure)
})

const { DataTypes } = models.Sequelize

/** 查询数据库，获取所有的表结构 */
const getStructure = async () => {
    return await models.sequelize.query(
        `
        SELECT
        A.TABLE_NAME 'table_name',
        A.COLUMN_NAME 'column_name',
        A.DATA_TYPE 'column_type',
        A.COLUMN_COMMENT 'column_comment',
        case 
        when
        Column_key = 'PRI'
        then 'yes' 
        else 'no' 
        end isPri,
        case 
        when
        Extra = 'auto_increment'
        then 'yes' 
        else 'no' 
        end isAut
        
        FROM INFORMATION_SCHEMA.COLUMNS A
        WHERE A.TABLE_SCHEMA='rights_new'
        ORDER BY A.TABLE_SCHEMA,A.TABLE_NAME,A.ORDINAL_POSITION
    `
        , { type: models.sequelize.QueryTypes.SELECT })
}

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

/** 数据库字段类型映射 */
const TypesEnum = {
    bigint: DataTypes.BIGINT,
    int: DataTypes.INTEGER,
    varchar: DataTypes.STRING,
    date: DataTypes.DATE,
    text: DataTypes.TEXT,
}

/** 生成关于表字段的配置文件 */
const generateConfig = (tableStructure) => {
    return Object.keys(tableStructure).map(key => {
        const table = {}

        tableStructure[key].forEach(column => {
            table[column.column_name] = {
                type: column.column_type,
                primaryKey: column.isPri === 'yes' ? true : undefined,
                autoIncrement: column.isAut === 'yes' ? true : undefined,
                comment: column.column_comment,
            }
        })

        return {
            name: key,
            table
        }
    })
}

/** 用来存储所有的 model 文件 */
const files = []

/** 读取模板内容 */



/** 入口函数 */
const init = async () => {
    const result = await getStructure()
    // console.log('result', result)
    /** 获取数据库中所有表的结构 */
    const tableStructure = groupBy(result)
    // console.log('tableStructure', tableStructure)
    const configs = generateConfig(tableStructure)

    return configs
}




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