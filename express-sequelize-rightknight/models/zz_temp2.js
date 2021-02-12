'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class zz_temp2 extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    zz_temp2.init({
        
        fk_author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        money: {
            type: DataTypes.DOUBLE,
            
            
        },
        
        
        
        vio_cnt: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        },{
        sequelize,
        modelName: 'zz_temp2',
        timestamps: false,
        freezeTableName: true
    });
    return zz_temp2;
};