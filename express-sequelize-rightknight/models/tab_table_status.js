'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tab_table_status extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tab_table_status.init({
        
        
        
        table_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        in_update: {
            type: DataTypes.TINYINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tab_table_status',
        timestamps: false,
        freezeTableName: true
    });
    return tab_table_status;
};