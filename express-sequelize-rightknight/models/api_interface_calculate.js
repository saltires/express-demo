'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class api_interface_calculate extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    api_interface_calculate.init({
        
        
        
        interface_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        apply_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        date: {
            type: DataTypes.DATE,
            
            
        },
        
        
        
        total_count: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        err_count: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'api_interface_calculate',
        timestamps: false,
        freezeTableName: true
    });
    return api_interface_calculate;
};