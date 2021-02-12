'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class spider_url_list extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    spider_url_list.init({
        
        
        
        url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        website_name: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'spider_url_list',
        timestamps: false,
        freezeTableName: true
    });
    return spider_url_list;
};