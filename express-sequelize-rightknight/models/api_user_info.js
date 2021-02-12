'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class api_user_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    api_user_info.init({
        
        
        
        account: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        password: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        resource_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        developer: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        remark: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'api_user_info',
        timestamps: false,
        freezeTableName: true
    });
    return api_user_info;
};