'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class bb_pub_detail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    bb_pub_detail.init({
        
        dt: {
            type: DataTypes.DATE,
            
            
        },
        
        
        
        
        
        media_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        media_account: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        email_address: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        is_reg_today: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        is_login_today: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        login_cnt_30day: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        login_cnt_today: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        opr_cnt_today: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        credit_score: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        score_chg_today: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        comp_money: {
            type: DataTypes.DOUBLE,
            
            
        },
        
        
        
        comp_money_today: {
            type: DataTypes.DOUBLE,
            
            
        },
        
        
        
        is_auth_today: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        click_auth_cnt_today: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        is_auth_artilce_today: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        auth_artilce_cnt: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        auth_artilce_cnt_today: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        free_auth_cnt_today: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        pay_auth_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        pay_auth_cnt_today: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        auth_money_all: {
            type: DataTypes.DOUBLE,
            
            
        },
        
        
        
        auth_money_all_today: {
            type: DataTypes.DOUBLE,
            
            
        },
        
        
        
        search_artcicles_cnt: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        search_author_cnt: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        zhuanzai_article_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        comp_articles_cnt: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        pub_artilce_cnt: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        click_auth_cnt_today1: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        },{
        sequelize,
        modelName: 'bb_pub_detail',
        timestamps: false,
        freezeTableName: true
    });
    return bb_pub_detail;
};