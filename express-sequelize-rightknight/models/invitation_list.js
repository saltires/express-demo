'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class invitation_list extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    invitation_list.init({
        
        
        
        code: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        is_used: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        resource_type: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        create_person: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        register_person: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'invitation_list',
        timestamps: false,
        freezeTableName: true
    });
    return invitation_list;
};