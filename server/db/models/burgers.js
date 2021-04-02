"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Burgers extends Model {
    static associate(models) {}
  }
  Burgers.init(
    {
      orderProduct_id: DataTypes.INTEGER,
      extra_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Burgers",
    }
  );
  return Burgers;
};
