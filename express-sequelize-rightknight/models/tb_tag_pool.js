'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_tag_pool extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_tag_pool.init({
        
        
        
        pid: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        tag_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        memo: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        image: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_tag_pool',
        timestamps: false,
        freezeTableName: true
    });
    return tb_tag_pool;
};