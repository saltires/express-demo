'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class dispute_handling extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    dispute_handling.init({
        
        
        
        fk_article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        fk_first_publish_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        article_title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        articles_vio_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        media_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        pub_vio_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        media_account: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        article_vio_title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        article_vio_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        vio_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        fk_article_detail_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        nick_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        primary_knight_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        primary_audit_result: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        primary_remark: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        two_knight_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        two_audit_result: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        two_remark: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        notification_knight_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        notification_audit_result: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        notification_remark: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        audit_type: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        author_remark: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        is_delete: {
            type: DataTypes.SMALLINT,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'dispute_handling',
        timestamps: false,
        freezeTableName: true
    });
    return dispute_handling;
};