'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_binded_media_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_binded_media_info.init({
        
        
        
        pub_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        media_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        media_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        media_account: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        media_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        certificat_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        remarks: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        creation_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_binded_media_info',
        timestamps: false,
        freezeTableName: true
    });
    return tb_binded_media_info;
};