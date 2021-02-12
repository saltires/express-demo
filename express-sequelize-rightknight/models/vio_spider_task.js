'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class vio_spider_task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    vio_spider_task.init({
        
        
        
        fk_author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        fk_article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        need_spider: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        spider_page_num: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        next_update_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        special_type: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'vio_spider_task',
        timestamps: false,
        freezeTableName: true
    });
    return vio_spider_task;
};