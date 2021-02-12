'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_knight_root_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_knight_root_info.init({
        
        
        
        knight_id: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        menu_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        creater: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_knight_root_info',
        timestamps: false,
        freezeTableName: true
    });
    return tb_knight_root_info;
};