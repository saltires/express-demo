const models = require("./models")
const path = require('path')
const ejs = require('ejs')
const fs = require('fs')
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
    'bigint': 'DataTypes.BIGINT',
    'int': 'DataTypes.INTEGER',
    'varchar': 'DataTypes.STRING',
    'date': 'DataTypes.DATE',
    'text': 'DataTypes.TEXT',
    'smallint': 'DataTypes.SMALLINT',
    'float': 'DataTypes.FLOAT',
    'decimal': 'DataTypes.DECIMAL',
    'double': 'DataTypes.DOUBLE',
    'bit': 'DataTypes.BOOLEAN',
    'tinyint': 'DataTypes.TINYINT',
    'mediumtext': 'DataTypes.TEXT',
    'timestamp': 'DataTypes.BIGINT',
}

/** 生成关于表字段的配置文件 */
const generateConfig = (tableStructure) => {
    return Object.keys(tableStructure).map(key => {
        const table = []

        tableStructure[key].forEach(column => {
            table.push({
                type: TypesEnum[column.column_type],
                primaryKey: column.isPri === 'yes' ? true : undefined,
                autoIncrement: column.isAut === 'yes' ? true : undefined,
                comment: column.column_comment,
                key:column.column_name,
            })
        })

        return {
            name: key,
            table
        }
    })
}

/**
 * @description 读取一个文件，并以 buufer 的形式返回s
 * @return { Promise<Buffer> }
 */
const read = async (input, code) => {
    return await fs.promises.readFile(input, code)
}

/** 读取模板内容 */
const generateFiles = async (configs) => {
    const result = []

    for (let i = 0; i < configs.length; i++) {
        const { name, table } = configs[i]
        const content = await read(path.join(__dirname, './template/model.ejs'), 'utf-8')
        const rendersData = ejs.render(content.toString(), { table_name: name, config: table })

        result.push({
            name,
            rendersData
        })
    }

    return result
}

/** 生成文件 */
const yieldFiles = async (files) => {
    files.forEach(async item => {
        const target = path.join(__dirname, './models/', `${item.name}.js`)
        await write(target, item.rendersData)
    })
}

/**
 * @description 创建一个文件，如果其目录不存在，递归创建目录，最后创建文件
 * @return { Promise<void> }
 */
const write = async (input, contents) => {
    return await fs.promises.writeFile(input, contents)
}


/** 入口函数 */
const init = async () => {
    const result = await getStructure()
    // console.log('result', result)
    /** 获取数据库中所有表的结构 */
    const tableStructure = groupBy(result)
    // console.log('tableStructure', tableStructure)
    const configs = generateConfig(tableStructure)
    console.log(configs)
    // console.log('configs', configs)
    /** 读取模板内容，并生成模板数组 */
    const files = await generateFiles(configs)

    /** 生成 model文件 */
    await yieldFiles(files)
}

init()
