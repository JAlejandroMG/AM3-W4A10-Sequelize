'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Registrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_Client: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:"Clients",
          key:"id"
        }
      },
      id_Membership: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:"Memberships",
          key:"id"
        }
      },
      time_of_creation: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      periods: {
        allowNull: false,
        type: Sequelize.SMALLINT,
        defaultValue: 1
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
    await queryInterface.dropTable('Registrations');
  }
};