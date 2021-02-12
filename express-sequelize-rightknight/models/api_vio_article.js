'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class api_vio_article extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    api_vio_article.init({
        
        
        
        apply_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        interface_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        code: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        original_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        original_title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        plagiarism_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        plagiarism_title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        remark: {
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
        modelName: 'api_vio_article',
        timestamps: false,
        freezeTableName: true
    });
    return api_vio_article;
};