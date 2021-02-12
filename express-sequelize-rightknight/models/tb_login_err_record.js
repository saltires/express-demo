'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_login_err_record extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_login_err_record.init({
        
        
        
        user_id: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        user_type: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        date: {
            type: DataTypes.DATE,
            
            
        },
        
        
        
        err_count: {
            type: DataTypes.INTEGER,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_login_err_record',
        timestamps: false,
        freezeTableName: true
    });
    return tb_login_err_record;
};