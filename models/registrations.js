'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registrations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Registrations.init({
    id_Client: DataTypes.INTEGER,
    id_Membership: DataTypes.INTEGER,
    time_of_creation: DataTypes.DATE,
    periods: DataTypes.SMALLINT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Registrations',
  });
  return Registrations;
};