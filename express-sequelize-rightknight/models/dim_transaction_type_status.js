'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class dim_transaction_type_status extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    dim_transaction_type_status.init({
        
        
        
        type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        Memo: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'dim_transaction_type_status',
        timestamps: false,
        freezeTableName: true
    });
    return dim_transaction_type_status;
};