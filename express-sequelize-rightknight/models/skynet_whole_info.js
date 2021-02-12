'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class skynet_whole_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    skynet_whole_info.init({
        
        
        
        article_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        article_intoskynet_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        weixin_vio_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        baidu_vio_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        toutiao_vio_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'skynet_whole_info',
        timestamps: false,
        freezeTableName: true
    });
    return skynet_whole_info;
};