'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_article_detail_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_article_detail_info.init({
        
        
        
        fk_author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        fk_article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        source_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        type: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        publish_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        last_edit_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        word_cnt: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        is_exist: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        first_publish_check_status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        original_id: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        file_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        access_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        data_source: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        data_source_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        sim_hash: {
            type: DataTypes.BIGINT,
            
            
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
        modelName: 'tb_article_detail_info',
        timestamps: false,
        freezeTableName: true
    });
    return tb_article_detail_info;
};