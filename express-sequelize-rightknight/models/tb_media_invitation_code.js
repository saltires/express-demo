'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_media_invitation_code extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_media_invitation_code.init({
        
        
        
        code: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        media_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        media_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        media_account: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        media_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        creater_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        user_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        use_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_media_invitation_code',
        timestamps: false,
        freezeTableName: true
    });
    return tb_media_invitation_code;
};