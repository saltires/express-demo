'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class table_explain extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    table_explain.init({
        
        
        
        table_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        table_field: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        field_remark: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        table_remark: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        is_delete: {
            type: DataTypes.SMALLINT,
            
            
        },
        
        
        
        remark: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'table_explain',
        timestamps: false,
        freezeTableName: true
    });
    return table_explain;
};