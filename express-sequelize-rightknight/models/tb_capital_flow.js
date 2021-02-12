'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_capital_flow extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_capital_flow.init({
        
        
        
        pId: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        fk_operator_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        operator_nick: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        operator_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        fk_receiver_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        receiver_nick: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        receiver_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        fk_articles_vio_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        fk_binded_media_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        fk_authorize_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        money: {
            type: DataTypes.FLOAT,
            
            
        },
        
        
        
        process_money: {
            type: DataTypes.FLOAT,
            
            
        },
        
        
        
        capital_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        account_type_one: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        account_type_two: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        account_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        inside_order: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        outside_order: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        remarks: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_capital_flow',
        timestamps: false,
        freezeTableName: true
    });
    return tb_capital_flow;
};