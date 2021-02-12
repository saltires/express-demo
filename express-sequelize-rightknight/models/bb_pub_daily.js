'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class bb_pub_daily extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    bb_pub_daily.init({
        
        dt: {
            type: DataTypes.DATE,
            
            
        },
        
        
        
        reg_user_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        email_not_active_user_cnt: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        email_active_not_binding_user_cnt: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        binding_user_cnt: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        unbinding_user_cnt: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        info_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        log_user_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        opr_user_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        opr_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        apply_auth_user_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        apply_auth_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        click_auth_apply_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        auth_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        free_auth_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        pay_auth_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        auth_money: {
            type: DataTypes.DOUBLE,
            
            
        },
        
        },{
        sequelize,
        modelName: 'bb_pub_daily',
        timestamps: false,
        freezeTableName: true
    });
    return bb_pub_daily;
};