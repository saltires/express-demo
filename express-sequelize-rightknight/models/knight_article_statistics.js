'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class knight_article_statistics extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    knight_article_statistics.init({
        
        
        
        articles_count: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        articles_vio_count: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        knight_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        kaccount_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        knight_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        right_level: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        effective_rate: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        correct_rate: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        is_delete: {
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
        modelName: 'knight_article_statistics',
        timestamps: false,
        freezeTableName: true
    });
    return knight_article_statistics;
};