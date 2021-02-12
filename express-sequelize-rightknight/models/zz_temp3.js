'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class zz_temp3 extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    zz_temp3.init({
        
        nick_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        site_homepage: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        site_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.DATE,
            
            
        },
        
        
        
        article_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        money: {
            type: DataTypes.DOUBLE,
            
            
        },
        
        
        
        vio_cnt: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        email: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'zz_temp3',
        timestamps: false,
        freezeTableName: true
    });
    return zz_temp3;
};