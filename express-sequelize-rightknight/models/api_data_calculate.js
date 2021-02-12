'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class api_data_calculate extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    api_data_calculate.init({
        
        
        
        user_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        apply_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        date: {
            type: DataTypes.DATE,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        authors_num: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        articles_num: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        vios_num: {
            type: DataTypes.INTEGER,
            
            
        },
        
        },{
        sequelize,
        modelName: 'api_data_calculate',
        timestamps: false,
        freezeTableName: true
    });
    return api_data_calculate;
};