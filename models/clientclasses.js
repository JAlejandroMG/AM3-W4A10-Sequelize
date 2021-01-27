'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClientClasses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ClientClasses.init({
    id_Client: DataTypes.INTEGER,
    id_Class: DataTypes.INTEGER,
    date_starts: DataTypes.DATEONLY,
    date_ends: DataTypes.DATEONLY,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ClientClasses',
  });
  return ClientClasses;
};