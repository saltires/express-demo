'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class api_type_list extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    api_type_list.init({
        
        
        
        url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        description: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        call_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        resource_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        },{
        sequelize,
        modelName: 'api_type_list',
        timestamps: false,
        freezeTableName: true
    });
    return api_type_list;
};