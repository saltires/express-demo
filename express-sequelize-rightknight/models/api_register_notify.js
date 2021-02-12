'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class api_register_notify extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    api_register_notify.init({
        
        
        
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
        
        
        
        home_page: {
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
        
        
        
        decrypt_content: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'api_register_notify',
        timestamps: false,
        freezeTableName: true
    });
    return api_register_notify;
};