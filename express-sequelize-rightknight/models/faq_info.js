'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class faq_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    faq_info.init({
        
        
        
        type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        title_order: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        question_order: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        question: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        answer: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        image_url: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'faq_info',
        timestamps: false,
        freezeTableName: true
    });
    return faq_info;
};