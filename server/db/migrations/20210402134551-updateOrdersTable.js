'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('Orders', 'chef_id');
  },

  down: async (queryInterface, Sequelize) => {
      return await queryInterface.addColumn(
          'Orders',
          'chef_id',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            foreignKey: true
          }
        )
    }
};
