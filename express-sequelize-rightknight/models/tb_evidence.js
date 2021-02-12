'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_evidence extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_evidence.init({
        
        
        
        identification: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        type: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        evidence_code: {
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
        modelName: 'tb_evidence',
        timestamps: false,
        freezeTableName: true
    });
    return tb_evidence;
};