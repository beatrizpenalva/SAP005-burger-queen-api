"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderProducts extends Model {
    static associate(models) {
      OrderProducts.belongsTo(models.Products);
    }
  }
  OrderProducts.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
      },
      product_id: {
        type: DataTypes.INTEGER,
      },
      quantity:{
        type: DataTypes.INTEGER,
      },
      extra_id: {
        type: DataTypes.INTEGER,
      }
    },
    {
      sequelize,
      modelName: "OrderProducts",
    }
  );
  return OrderProducts;
};
