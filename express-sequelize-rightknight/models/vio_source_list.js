'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class vio_source_list extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    vio_source_list.init({
        
        
        
        source_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        source_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        source_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        is_contraposed: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        is_used: {
            type: DataTypes.INTEGER,
            
            
        },
        
        },{
        sequelize,
        modelName: 'vio_source_list',
        timestamps: false,
        freezeTableName: true
    });
    return vio_source_list;
};