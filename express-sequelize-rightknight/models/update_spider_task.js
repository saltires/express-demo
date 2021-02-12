'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class update_spider_task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    update_spider_task.init({
        
        
        
        task_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        id_data: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        next_update_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        need_spider: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'update_spider_task',
        timestamps: false,
        freezeTableName: true
    });
    return update_spider_task;
};