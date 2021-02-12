'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_dop_push_vio extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_dop_push_vio.init({
        
        
        
        api_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        vio_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        original_id: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        original_publish_time: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        original_source_type: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        author_openid: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        site_nick_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        vio_title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        vio_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        vio_time: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        vio_media_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        vio_media_account: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        vio_media_platform: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        push_status: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        notify_status: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        insert_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        update_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_dop_push_vio',
        timestamps: false,
        freezeTableName: true
    });
    return tb_dop_push_vio;
};