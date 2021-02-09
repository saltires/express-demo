const models = require("../models")
const path = require('path')

/** 查询数据库，获取所有的表结构 */
const result = await models.sequelize.query("SELECT A.TABLE_NAME 'table_name',A.COLUMN_NAME 'column_name',A.DATA_TYPE 'column_type',A.COLUMN_COMMENT 'column_comment' FROM INFORMATION_SCHEMA.COLUMNS A WHERE A.TABLE_SCHEMA='rights_new' ORDER BY A.TABLE_SCHEMA,A.TABLE_NAME,A.ORDINAL_POSITION", { type: models.sequelize.QueryTypes.SELECT })

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

/** 获取数据库中所有表的结构 */
const tableStructure = groupBy(result)

/** 用来存储所有的 model 文件 */
const files = []