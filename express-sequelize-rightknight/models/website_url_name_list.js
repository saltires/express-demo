'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class website_url_name_list extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    website_url_name_list.init({
        
        
        
        url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        website_name: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'website_url_name_list',
        timestamps: false,
        freezeTableName: true
    });
    return website_url_name_list;
};