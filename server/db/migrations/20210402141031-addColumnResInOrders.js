'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('Orders', 'restaurant', {
        type: Sequelize.STRING,
        allowNull: false
      })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('Orders', 'restaurant')
  }
};
