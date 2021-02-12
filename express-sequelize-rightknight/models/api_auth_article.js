'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class api_auth_article extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    api_auth_article.init({
        
        
        
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
        
        
        
        article_code: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        article_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        article_title: {
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
        modelName: 'api_auth_article',
        timestamps: false,
        freezeTableName: true
    });
    return api_auth_article;
};