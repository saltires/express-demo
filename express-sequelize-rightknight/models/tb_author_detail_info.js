'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_author_detail_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_author_detail_info.init({
        
        
        
        fk_author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        id_number: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        mobile: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        mobile_is_verified: {
            type: DataTypes.BOOLEAN,
            
            
        },
        
        
        
        email: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        md: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        email_is_verified: {
            type: DataTypes.BOOLEAN,
            
            
        },
        
        
        
        alipay_account: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        alipay_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        address: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        id_card_front_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        id_card_behind_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        qq: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        author_commissioned_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        tort_party_commission_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        platform_binding_protocol_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        commit_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_author_detail_info',
        timestamps: false,
        freezeTableName: true
    });
    return tb_author_detail_info;
};