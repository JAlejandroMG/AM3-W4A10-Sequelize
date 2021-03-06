'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Memberships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Registrations, {
        foreignKey: 'id_Membership'
      });
    }
  };
  Memberships.init({
    name: DataTypes.STRING,
    price: DataTypes.SMALLINT,
    lifespan_in_months: DataTypes.SMALLINT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Memberships',
  });
  return Memberships;
};