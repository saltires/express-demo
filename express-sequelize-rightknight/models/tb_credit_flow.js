'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_credit_flow extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_credit_flow.init({
        
        
        
        vio_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        pub_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        dispose_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        value: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        value_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        remark: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        binded_media_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_credit_flow',
        timestamps: false,
        freezeTableName: true
    });
    return tb_credit_flow;
};