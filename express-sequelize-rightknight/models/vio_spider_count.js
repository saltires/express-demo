'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class vio_spider_count extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    vio_spider_count.init({
        
        
        
        time: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        weixin: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        baidu: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        weixin_up: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        baidu_up: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_0: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_1: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_2: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_3: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_4: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_5: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_6: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_7: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_8: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_9: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_10: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_11: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_12: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_13: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_14: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_15: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status_10000: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'vio_spider_count',
        timestamps: false,
        freezeTableName: true
    });
    return vio_spider_count;
};