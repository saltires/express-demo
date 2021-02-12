'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class article_tag extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    article_tag.init({
        
        
        
        article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        author_id: {
            type: DataTypes.BIGINT,
            
            
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
        modelName: 'article_tag',
        timestamps: false,
        freezeTableName: true
    });
    return article_tag;
};