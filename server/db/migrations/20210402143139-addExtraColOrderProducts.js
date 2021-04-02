'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('OrderProducts', 'extra_id', {
      type: Sequelize.INTEGER,
      foreignKey: true
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('OrderProducts', 'extra_id')
  }
};
