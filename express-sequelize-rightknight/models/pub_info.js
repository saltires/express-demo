'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class pub_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    pub_info.init({
        
        
        
        account_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        password: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        pub_nick_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        pub_wechat_id: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        first_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        last_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        identity_card_no: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        cell_phone: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        email_address: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        alipay_account: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        account_balance: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        md: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        id_card_front_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        id_card_behind_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        is_first: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        credit_score: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        contact_email: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        account_type: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'pub_info',
        timestamps: false,
        freezeTableName: true
    });
    return pub_info;
};