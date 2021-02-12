'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class site_resource_list extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    site_resource_list.init({
        
        
        
        site_type: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        site_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        site_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        app_id: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        app_secret: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        vio_source_list_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'site_resource_list',
        timestamps: false,
        freezeTableName: true
    });
    return site_resource_list;
};