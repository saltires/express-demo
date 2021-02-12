'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class author_tag extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    author_tag.init({
        
        
        
        tag_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        author_id: {
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
        modelName: 'author_tag',
        timestamps: false,
        freezeTableName: true
    });
    return author_tag;
};