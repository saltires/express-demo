'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class control_list extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    control_list.init({
        
        
        
        current_status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        next_status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        },{
        sequelize,
        modelName: 'control_list',
        timestamps: false,
        freezeTableName: true
    });
    return control_list;
};