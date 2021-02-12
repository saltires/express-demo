'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_person_config extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_person_config.init({
        
        
        
        person_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        person_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        home_remind: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        course_page: {
            type: DataTypes.BOOLEAN,
            
            
        },
        
        
        
        course_guide: {
            type: DataTypes.BOOLEAN,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_person_config',
        timestamps: false,
        freezeTableName: true
    });
    return tb_person_config;
};