'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_banner_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_banner_info.init({
        
        
        
        title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        describe: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        picture: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        status: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        sort: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        publish_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        under_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        insert_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        update_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_banner_info',
        timestamps: false,
        freezeTableName: true
    });
    return tb_banner_info;
};