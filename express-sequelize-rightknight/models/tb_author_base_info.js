'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_author_base_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_author_base_info.init({
        
        
        
        account_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        password: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        nick_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        is_valid: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        rights_status: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        rights_valid_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        cover_picture: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        balance: {
            type: DataTypes.DOUBLE,
            
            
        },
        
        
        
        flow_credit: {
            type: DataTypes.DOUBLE,
            
            
        },
        
        
        
        auto_authorize: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        distribute_authorized: {
            type: DataTypes.BOOLEAN,
            
            
        },
        
        
        
        collection_count: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        authorized_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        remark: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        photo: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        weixin_openid: {
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
        modelName: 'tb_author_base_info',
        timestamps: false,
        freezeTableName: true
    });
    return tb_author_base_info;
};