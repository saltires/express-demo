'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_authorize_condition extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_authorize_condition.init({
        
        
        
        article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        authorize_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        correlation_content: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        price: {
            type: DataTypes.FLOAT,
            
            
        },
        
        
        
        signed_status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        signed_detail: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_authorize_condition',
        timestamps: false,
        freezeTableName: true
    });
    return tb_authorize_condition;
};