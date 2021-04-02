'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Orders', 'processedAt', {
      type: Sequelize.DATE 
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Orders', 'processedAt', {
      type: Sequelize.TIME 
    })
  }
};
