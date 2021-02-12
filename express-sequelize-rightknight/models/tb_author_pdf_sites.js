'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tb_author_pdf_sites extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    tb_author_pdf_sites.init({
        
        
        
        author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        site_type: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        nike_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        platform_url: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        modify_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        is_delete: {
            type: DataTypes.SMALLINT,
            
            
        },
        
        },{
        sequelize,
        modelName: 'tb_author_pdf_sites',
        timestamps: false,
        freezeTableName: true
    });
    return tb_author_pdf_sites;
};