'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tran_record extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tran_record.init({
        
        
        
        auth_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        detail: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        money: {
            type: DataTypes.FLOAT,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        alipay_account: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        alipay_name: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tran_record',
        timestamps: false,
        freezeTableName: true
    });
    return tran_record;
};