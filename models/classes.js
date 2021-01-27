'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Classes.init({
    id_Instructor: DataTypes.INTEGER,
    name: DataTypes.STRING,
    subject: DataTypes.STRING,
    date_starts: DataTypes.DATEONLY,
    date_ends: DataTypes.DATEONLY,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Classes',
  });
  return Classes;
};