'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class weixin_uin extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    weixin_uin.init({
        
        
        
        value: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        usable: {
            type: DataTypes.INTEGER,
            
            
        },
        
        },{
        sequelize,
        modelName: 'weixin_uin',
        timestamps: false,
        freezeTableName: true
    });
    return weixin_uin;
};