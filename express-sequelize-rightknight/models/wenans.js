'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class wenans extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    wenans.init({
        
        wenan_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        
        
        filename: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        content: {
            type: DataTypes.TEXT,
            
            
        },
        
        
        
        resource_type: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'wenans',
        timestamps: false,
        freezeTableName: true
    });
    return wenans;
};