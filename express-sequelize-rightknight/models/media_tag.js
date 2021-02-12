'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class media_tag extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    media_tag.init({
        
        
        
        media_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        media_type: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        label_level: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        label_name: {
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
        modelName: 'media_tag',
        timestamps: false,
        freezeTableName: true
    });
    return media_tag;
};