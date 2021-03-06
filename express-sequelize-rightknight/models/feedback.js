'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class feedback extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    feedback.init({
        
        
        
        author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        pub_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        content: {
            type: DataTypes.TEXT,
            
            
        },
        
        
        
        reply: {
            type: DataTypes.TEXT,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        message_status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'feedback',
        timestamps: false,
        freezeTableName: true
    });
    return feedback;
};