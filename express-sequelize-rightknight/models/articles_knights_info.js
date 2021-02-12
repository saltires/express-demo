'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class articles_knights_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    articles_knights_info.init({
        
        
        
        fk_article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        fk_knight_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        remarks: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        frozen_status: {
            type: DataTypes.INTEGER,
            
            
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
        
        
        
        knight_type: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            
        },
        
        },{
        sequelize,
        modelName: 'articles_knights_info',
        timestamps: false,
        freezeTableName: true
    });
    return articles_knights_info;
};