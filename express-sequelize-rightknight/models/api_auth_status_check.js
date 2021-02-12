'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class api_auth_status_check extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    api_auth_status_check.init({
        
        
        
        apply_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        interface_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        code: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        mid: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        nick_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        passed: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        home_page: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        examine_type: {
            type: DataTypes.INTEGER,
            
            
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
        
        
        
        decrypt_content: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'api_auth_status_check',
        timestamps: false,
        freezeTableName: true
    });
    return api_auth_status_check;
};