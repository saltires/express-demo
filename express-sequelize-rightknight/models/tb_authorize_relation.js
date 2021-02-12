'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_authorize_relation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_authorize_relation.init({
        
        
        
        article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        article_title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        article_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        pub_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        binded_media_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        media_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        media_article_title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        media_article_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        media_article_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        authorize_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        serial_number: {
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
        modelName: 'tb_authorize_relation',
        timestamps: false,
        freezeTableName: true
    });
    return tb_authorize_relation;
};