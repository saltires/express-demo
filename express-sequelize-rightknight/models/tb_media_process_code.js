'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_media_process_code extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_media_process_code.init({
        
        
        
        code: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        media_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        fk_media_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        fk_vio_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status: {
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
        modelName: 'tb_media_process_code',
        timestamps: false,
        freezeTableName: true
    });
    return tb_media_process_code;
};