'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_email_format_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_email_format_info.init({
        
        
        
        purpose: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        subject: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        content: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        image_source: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        attach_source: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_email_format_info',
        timestamps: false,
        freezeTableName: true
    });
    return tb_email_format_info;
};