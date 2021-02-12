'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class trial_article extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    trial_article.init({
        
        
        
        url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        site_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        content: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'trial_article',
        timestamps: false,
        freezeTableName: true
    });
    return trial_article;
};