'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class media_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    media_info.init({
        
        
        
        media_account: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        media_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        media_intro: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        source_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        media_character: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        is_blackList: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        certifi_authority: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'media_info',
        timestamps: false,
        freezeTableName: true
    });
    return media_info;
};