'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class table_operation_record extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    table_operation_record.init({
        
        
        
        fk_table_explain_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        operation: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        table_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        field_value_old: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        field_value_new: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        is_delete: {
            type: DataTypes.SMALLINT,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'table_operation_record',
        timestamps: false,
        freezeTableName: true
    });
    return table_operation_record;
};