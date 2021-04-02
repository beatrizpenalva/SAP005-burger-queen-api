'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('Orders', 'updateAt');
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'Orders',
      'uodateAt',
      {
        type: Sequelize.TIME
      }
    )
  }
};
