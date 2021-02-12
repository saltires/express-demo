'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_message_record extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_message_record.init({
        
        
        
        sender: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        receiver: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        page: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        code: {
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
        modelName: 'tb_message_record',
        timestamps: false,
        freezeTableName: true
    });
    return tb_message_record;
};