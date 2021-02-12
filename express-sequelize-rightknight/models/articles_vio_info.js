'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class articles_vio_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    articles_vio_info.init({
        
        
        
        fk_author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        fk_article_detail_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        media_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        pub_vio_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        article_vio_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        author_openid: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        article_vio_title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        vio_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        money: {
            type: DataTypes.FLOAT,
            
            
        },
        
        
        
        image_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        knight_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        memo: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        pub_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        tran_type: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        alipay_trade_no: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        source_type: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        plagiarism_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        data_source: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        data_source_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        cunnar_no: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        evidence_no: {
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
        modelName: 'articles_vio_info',
        timestamps: false,
        freezeTableName: true
    });
    return articles_vio_info;
};