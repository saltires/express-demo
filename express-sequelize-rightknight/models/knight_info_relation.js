'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class knight_info_relation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    knight_info_relation.init({
        
        
        
        higher_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        lower_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'knight_info_relation',
        timestamps: false,
        freezeTableName: true
    });
    return knight_info_relation;
};