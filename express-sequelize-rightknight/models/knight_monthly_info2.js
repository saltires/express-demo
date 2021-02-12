'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class knight_monthly_info2 extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    knight_monthly_info2.init({
        
        article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        article_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        article_type: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        article_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        pulish_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        is_authorized: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        knight_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        article_word_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        content: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        spider_status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        last_update_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        next_update_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        need_spider: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        spider_interval: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        spider_page_num: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        article_auth_status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        sale_status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        article_file_dir: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        new_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        thumbnail: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        vio_article_count: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        sale_word_authorized: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        sale_deal_authorized: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        sale_img_authorized: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        sale_text_authorized: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        ths_word_price: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        deal_price: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        sale_img_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        sale_img_word: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        publishtime_corrected: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        article_status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        original_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'knight_monthly_info2',
        timestamps: false,
        freezeTableName: true
    });
    return knight_monthly_info2;
};