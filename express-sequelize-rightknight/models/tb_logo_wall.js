'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_logo_wall extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_logo_wall.init({
        
        
        
        platform: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        picture: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        sort: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_logo_wall',
        timestamps: false,
        freezeTableName: true
    });
    return tb_logo_wall;
};