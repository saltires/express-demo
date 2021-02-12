'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_home_module extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_home_module.init({
        
        
        
        place: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        position: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        english: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        icon: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        url: {
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
        modelName: 'tb_home_module',
        timestamps: false,
        freezeTableName: true
    });
    return tb_home_module;
};