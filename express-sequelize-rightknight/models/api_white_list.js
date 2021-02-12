'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class api_white_list extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    api_white_list.init({
        
        
        
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
        
        
        
        white_list_info: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        type: {
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
        
        },{
        sequelize,
        modelName: 'api_white_list',
        timestamps: false,
        freezeTableName: true
    });
    return api_white_list;
};