'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class knights_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    knights_info.init({
        
        knight_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        
        
        
        kaccount_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        password: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        right_level: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        authors: {
            type: DataTypes.TEXT,
            
            
        },
        
        
        
        wechat_id: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        wechat_nick_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        knight_nick_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        knight_real_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        cert_no: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        team: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        alipay_account: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        knight_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        },{
        sequelize,
        modelName: 'knights_info',
        timestamps: false,
        freezeTableName: true
    });
    return knights_info;
};