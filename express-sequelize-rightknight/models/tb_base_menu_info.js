'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_base_menu_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_base_menu_info.init({
        
        
        
        pId: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        orderby: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        model_desc: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        css_id: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_base_menu_info',
        timestamps: false,
        freezeTableName: true
    });
    return tb_base_menu_info;
};