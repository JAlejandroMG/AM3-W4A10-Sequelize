'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ClientClasses', {
      /* id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, */
      id_Client: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model:"Clients",
          key:"id"
        }
      },
      id_Class: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model:"Classes",
          key:"id"
        }
      },
      date_starts: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      date_ends: {
        type: Sequelize.DATEONLY
      },
      active: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ClientClasses');
  }
};