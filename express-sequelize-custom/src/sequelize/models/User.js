const Sequelize = require('sequelize');

//定义模型
const Users = sequelize.define('Users' /* 自定义表名 */, {
    // 定义表中的字段，对象中的属性
    id: {
        type: Sequelize.INTEGER, //定义数据类型
        primaryKey: true, //设置主键
        autoIncrement: true, //设置自动增长
        comment: '自增id', //添加描述
    },
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    }
}, {
    // 其他模型参数
    timestamps: true, //禁用时间戳，去掉createdAt和updatedAt字段，默认为true
    freezeTableName: true, //表名冻结，Model对应的表名将与定义的'Users'相同，默认为true
});

module.exports = Users