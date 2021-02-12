'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class code_error_list extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    code_error_list.init({
        
        
        
        code: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        code_description: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'code_error_list',
        timestamps: false,
        freezeTableName: true
    });
    return code_error_list;
};