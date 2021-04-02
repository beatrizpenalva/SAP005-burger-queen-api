"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      Orders.belongsToMany(models.Products, {
        through: "OrderProducts",
        as: "products",
        foreignKey: "order_id",
      });
    }
  }

  Orders.init(
    {
      table: {
        type: DataTypes.INTEGER,
      },
      client: {
        type: DataTypes.STRING,
      },
      totalPrice: {
        type: DataTypes.INTEGER,
      },
      attendant_id: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
      },
      comments: {
        type: DataTypes.STRING,
      },
      processedAt: {
        type: DataTypes.STRING,
      },
      restaurant:{
        type: DataTypes.STRING,
      }
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
