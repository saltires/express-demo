'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_authorize_author_info_temp extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_authorize_author_info_temp.init({
        
        
        
        fk_author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        nick_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        photo_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        tags: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        first_publish_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        last_publish_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        republish_times: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        article_count: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_authorize_author_info_temp',
        timestamps: false,
        freezeTableName: true
    });
    return tb_authorize_author_info_temp;
};