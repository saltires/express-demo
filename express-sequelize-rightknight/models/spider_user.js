'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class spider_user extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    spider_user.init({
        
        
        
        username: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        password: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'spider_user',
        timestamps: false,
        freezeTableName: true
    });
    return spider_user;
};