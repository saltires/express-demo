'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_url_update_task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_url_update_task.init({
        
        
        
        task_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        relative_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        url: {
            type: DataTypes.STRING,
            
            
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
        
        },{
        sequelize,
        modelName: 'tb_url_update_task',
        timestamps: false,
        freezeTableName: true
    });
    return tb_url_update_task;
};