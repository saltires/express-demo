'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_dop_vio extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_dop_vio.init({
        
        
        
        author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        original_id: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        author_openid: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        plagiarism_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        source_type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        title: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        vio_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        media_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        media_account: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        operate_type: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        update_type: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        data_source: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        synchronize_status: {
            type: DataTypes.TINYINT,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_dop_vio',
        timestamps: false,
        freezeTableName: true
    });
    return tb_dop_vio;
};