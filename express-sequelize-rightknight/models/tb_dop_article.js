'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_dop_article extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_dop_article.init({
        
        
        
        original_id: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        source_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        publish_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        content: {
            type: DataTypes.TEXT,
            
            
        },
        
        
        
        word_cnt: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        operate_type: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        type: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        last_edit_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        data_source: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        synchronize_status: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_dop_article',
        timestamps: false,
        freezeTableName: true
    });
    return tb_dop_article;
};