'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class pub_white_list extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    pub_white_list.init({
        
        
        
        author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        pub_auth_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        account_id: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        create_time: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        source_type: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        memo: {
            type: DataTypes.STRING,
            
            
        },
        
        },{
        sequelize,
        modelName: 'pub_white_list',
        timestamps: false,
        freezeTableName: true
    });
    return pub_white_list;
};