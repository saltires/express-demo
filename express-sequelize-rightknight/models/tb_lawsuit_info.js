'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_lawsuit_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_lawsuit_info.init({
        
        
        
        code: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        vio_party: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        law_firm: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        appeal_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        win_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        result: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        status: {
            type: DataTypes.TINYINT,
            
            
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
        modelName: 'tb_lawsuit_info',
        timestamps: false,
        freezeTableName: true
    });
    return tb_lawsuit_info;
};