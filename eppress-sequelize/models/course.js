'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Course extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Course.init({
        fk_pot_id: DataTypes.BIGINT,
        item_name: DataTypes.STRING,
        title: DataTypes.STRING,
        price: DataTypes.BIGINT,
        introduction: DataTypes.STRING,
        activity_price: DataTypes.STRING,
        activity_start: DataTypes.STRING,
        activity_end: DataTypes.STRING,
        cover_img_url: DataTypes.STRING,
        create_time: DataTypes.BIGINT,
        modify_time: DataTypes.BIGINT,
    }, {
        sequelize,
        modelName: 'Course',
        timestamps: false
    });
    return Course;
};