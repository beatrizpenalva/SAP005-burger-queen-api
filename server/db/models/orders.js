"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      Orders.belongsToMany(models.Products, {
        through: 'OrderProducts',
        as: 'products',
        foreignKey: 'order_id'
      });

    //   Orders.belongsTo(models.Users);
    }
  }

  Orders.init(
    {
      table: DataTypes.INTEGER,
      client: DataTypes.STRING,
      totalPrice: DataTypes.INTEGER,
      attendant_id: DataTypes.INTEGER,
      chef_id: DataTypes.INTEGER,
      status: DataTypes.STRING,
      comments: DataTypes.STRING,
      processedAt: DataTypes.TIME,
      updateAt: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
