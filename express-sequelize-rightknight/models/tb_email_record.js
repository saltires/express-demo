'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_email_record extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_email_record.init({
        
        
        
        sender: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        receiver: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        content: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        memo: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_email_record',
        timestamps: false,
        freezeTableName: true
    });
    return tb_email_record;
};