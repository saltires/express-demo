'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_authorize_article_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_authorize_article_info.init({
        
        
        
        fk_article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        article_title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        article_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        file_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        publish_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        word_cnt: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        republish_times: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        fk_author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        nick_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_authorize_article_info',
        timestamps: false,
        freezeTableName: true
    });
    return tb_authorize_article_info;
};