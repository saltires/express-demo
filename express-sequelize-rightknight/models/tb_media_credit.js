'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_media_credit extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_media_credit.init({
        
        
        
        level_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        level_score_min: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        level_value: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        level_explain: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        remark: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        level_score_max: {
            type: DataTypes.INTEGER,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_media_credit',
        timestamps: false,
        freezeTableName: true
    });
    return tb_media_credit;
};