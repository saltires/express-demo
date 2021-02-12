'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class spider_server extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    spider_server.init({
        
        
        
        type: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        name: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        remote_ip: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        remote_port: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        username: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        password: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        adsl_username: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        adsl_password: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        memo: {
            type: DataTypes.STRING,
            
            
        },
        
        
        
        load_average: {
            type: DataTypes.FLOAT,
            
            
        },
        
        
        
        disk_used: {
            type: DataTypes.INTEGER,
            
            
        },
        
        
        
        last_send_time: {
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
        modelName: 'spider_server',
        timestamps: false,
        freezeTableName: true
    });
    return spider_server;
};