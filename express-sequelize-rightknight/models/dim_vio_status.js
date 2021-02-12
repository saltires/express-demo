'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class dim_vio_status extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    dim_vio_status.init({
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        memo: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        sort: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        is_used: {
            type: DataTypes.INTEGER,
            
            
        },
        
        },{
        sequelize,
        modelName: 'dim_vio_status',
        timestamps: false,
        freezeTableName: true
    });
    return dim_vio_status;
};