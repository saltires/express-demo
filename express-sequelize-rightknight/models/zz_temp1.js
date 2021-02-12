'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class zz_temp1 extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    zz_temp1.init({
        
        article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        money: {
            type: DataTypes.DOUBLE,
            
            
        },
        
        
        
        cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'zz_temp1',
        timestamps: false,
        freezeTableName: true
    });
    return zz_temp1;
};