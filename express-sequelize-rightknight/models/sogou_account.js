'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class sogou_account extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    sogou_account.init({
        
        account_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        
        
        
        user_no: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        user_pwd: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        cookies: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        last_update_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        next_update_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        last_used_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        user_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        },{
        sequelize,
        modelName: 'sogou_account',
        timestamps: false,
        freezeTableName: true
    });
    return sogou_account;
};