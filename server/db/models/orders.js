'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Orders.init({
    table: DataTypes.INTEGER,
    client: DataTypes.STRING,
    totalPrice: DataTypes.INTEGER,
    attendant_id: DataTypes.INTEGER,
    chef_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    comments: DataTypes.STRING,
    processedAt: DataTypes.TIME,
    updateAt: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};