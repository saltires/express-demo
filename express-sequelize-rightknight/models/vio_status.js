'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class vio_status extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    vio_status.init({
        
        
        
        author_id: {
            type: DataTypes.BIGINT,
            
            
        },
        
        
        
        auth_nick_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        kaccount_name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        waiting_confirm_cnt: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        not_vio_cnt: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        vio_arrange_cnt: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        add_pub_cnt: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        first_cnt: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        second_cnt: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        third_cnt: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        apology_cnt: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        comp_cnt: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        comp_amt: {
            type: DataTypes.FLOAT,
            
            
        },
        
        
        
        date: {
            type: DataTypes.DATE,
            
            
        },
        
        },{
        sequelize,
        modelName: 'vio_status',
        timestamps: false,
        freezeTableName: true
    });
    return vio_status;
};