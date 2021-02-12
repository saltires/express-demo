'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class knight_monthly_info1 extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    knight_monthly_info1.init({
        
        
        
        article_id: {
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
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
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
        
        
        
        author_openid: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'knight_monthly_info1',
        timestamps: false,
        freezeTableName: true
    });
    return knight_monthly_info1;
};