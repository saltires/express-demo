'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class author_spread_status extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    author_spread_status.init({
        
        
        
        url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        icon_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        intro: {
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
        modelName: 'author_spread_status',
        timestamps: false,
        freezeTableName: true
    });
    return author_spread_status;
};