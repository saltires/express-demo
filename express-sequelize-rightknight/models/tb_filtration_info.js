'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_filtration_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_filtration_info.init({
        
        
        
        fk_author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        pass_condition: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        content: {
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
        modelName: 'tb_filtration_info',
        timestamps: false,
        freezeTableName: true
    });
    return tb_filtration_info;
};