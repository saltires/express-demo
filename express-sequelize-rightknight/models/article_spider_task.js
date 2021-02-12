'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class article_spider_task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    article_spider_task.init({
        
        
        
        url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        task_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        last_update_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        next_update_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        relative_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        author_name: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'article_spider_task',
        timestamps: false,
        freezeTableName: true
    });
    return article_spider_task;
};