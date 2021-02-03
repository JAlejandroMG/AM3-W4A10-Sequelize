'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /* this.belongsToMany(models.Classes, {
        through:'ClassSchedules',
        foreignKey: 'id_Schedules'
      }); */
    }
  };
  Schedules.init({
    time_starts: DataTypes.TIME,
    time_ends: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Schedules',
  });
  return Schedules;
};