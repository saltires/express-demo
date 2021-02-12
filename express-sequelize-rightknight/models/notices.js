'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class notices extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    notices.init({
        
        
        
        type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        publish_date: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        end_date: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        content: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        act_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        picture_url: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'notices',
        timestamps: false,
        freezeTableName: true
    });
    return notices;
};