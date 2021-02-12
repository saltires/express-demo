'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class bb_author extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    bb_author.init({
        
        dt: {
            type: DataTypes.DATE,
            
            
        },
        
        
        
        
        
        nick_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        site_homepage: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        mobile: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        email: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        id_upload: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        has_photo: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        is_reg_today: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        is_login_today: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        login_cnt_30day: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        set_auth_cond_cnt_30day: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        auth_article_cnt: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        is_open_new_auth_today: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        authorize_type: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        signed_detail: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        auth_artilce_cnt: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        auth_artilce_cnt_today: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        
        
        pub_artilce_cnt: {
            type: DataTypes.DECIMAL,
            
            
        },
        
        },{
        sequelize,
        modelName: 'bb_author',
        timestamps: false,
        freezeTableName: true
    });
    return bb_author;
};