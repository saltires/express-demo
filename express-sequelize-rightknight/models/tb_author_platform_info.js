'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_author_platform_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_author_platform_info.init({
        
        
        
        fk_author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        site_type: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        site_homepage: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        site_nick_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        certificat_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        data_source: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        author_openid: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        notify_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        memo: {
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
        modelName: 'tb_author_platform_info',
        timestamps: false,
        freezeTableName: true
    });
    return tb_author_platform_info;
};