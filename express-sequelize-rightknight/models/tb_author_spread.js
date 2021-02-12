'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_author_spread extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_author_spread.init({
        
        
        
        fk_author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        spread_type: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        spread_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        status: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        title: {
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
        modelName: 'tb_author_spread',
        timestamps: false,
        freezeTableName: true
    });
    return tb_author_spread;
};