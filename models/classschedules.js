'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassSchedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ClassSchedules.init({
    id_Class: DataTypes.INTEGER,
    id_Schedule: DataTypes.INTEGER,
    day_of_the_week: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ClassSchedules',
  });
  return ClassSchedules;
};