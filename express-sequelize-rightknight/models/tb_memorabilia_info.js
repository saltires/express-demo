'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_memorabilia_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_memorabilia_info.init({
        
        
        
        year: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        type: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        occur_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        content: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        update_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_memorabilia_info',
        timestamps: false,
        freezeTableName: true
    });
    return tb_memorabilia_info;
};