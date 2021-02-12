'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class label_dic extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    label_dic.init({
        
        
        
        keyword: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        first_level_tag: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        second_level_tag: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'label_dic',
        timestamps: false,
        freezeTableName: true
    });
    return label_dic;
};