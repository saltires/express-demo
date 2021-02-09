'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Feedback extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Feedback.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, //设置自动增长
            comment: '自增id', //添加描述
        },
        author_id: {
            type: DataTypes.BIGINT,
        },
        pub_id: {
            type: DataTypes.BIGINT,
        },
        nick_name: {
            type: DataTypes.STRING,
        },
        img1: {
            type: DataTypes.STRING,
        },
        img2: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.TEXT,
        },
        reply: {
            type: DataTypes.TEXT,
        },
        status: {
            type: DataTypes.INTEGER,
        },
        message_status: {
            type: DataTypes.INTEGER,
        },
        create_time: {
            type: DataTypes.BIGINT,
        },
        modify_time: {
            type: DataTypes.BIGINT,
        }
    }, {
        sequelize,
        modelName: 'feedback',
        timestamps: false,
        freezeTableName: true
    });
    return Feedback;
};