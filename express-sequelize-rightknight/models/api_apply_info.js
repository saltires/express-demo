'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class api_apply_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    api_apply_info.init({
        
        
        
        user_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        project: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        app_id: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        app_secret: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        code: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        home_page: {
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
        modelName: 'api_apply_info',
        timestamps: false,
        freezeTableName: true
    });
    return api_apply_info;
};