'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class knight_log extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    knight_log.init({
        
        
        
        knight_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        page: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        action: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        action_memo: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        content_before: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        content_after: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        IP: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        time_occur: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        dt: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'knight_log',
        timestamps: false,
        freezeTableName: true
    });
    return knight_log;
};