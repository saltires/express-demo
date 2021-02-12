'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class knights_record extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    knights_record.init({
        
        
        
        fk_knight_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        fk_table_operation_record_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modified_state: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        remark: {
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
        modelName: 'knights_record',
        timestamps: false,
        freezeTableName: true
    });
    return knights_record;
};