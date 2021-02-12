'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class spider_task_record extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    spider_task_record.init({
        
        
        
        record_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        spider_task_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        id_data: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'spider_task_record',
        timestamps: false,
        freezeTableName: true
    });
    return spider_task_record;
};