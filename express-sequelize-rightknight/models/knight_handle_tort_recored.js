'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class knight_handle_tort_recored extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    knight_handle_tort_recored.init({
        
        
        
        fk_article_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        fk_first_publish_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        fk_articles_vio_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        fk_knight_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        knight_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        right_level: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        operation_error: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        final_state: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        is_delete: {
            type: DataTypes.SMALLINT,
            
            
        },
        
        
        
        remark: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        supervisor_audit_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'knight_handle_tort_recored',
        timestamps: false,
        freezeTableName: true
    });
    return knight_handle_tort_recored;
};