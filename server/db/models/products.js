"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.belongsToMany(models.Orders, {
        through: "OrderProducts",
        as: "orders",
        foreignKey: "product_id",
      });
    }
  }
  Products.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
          notEmpty: {
            msg: "Name can not be empty",
          },
          notNull: {
            msg: "Name is required",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        notEmpty: true,
        validate: {
          notEmpty: {
            msg: "Price can not be empty",
          },
          notNull: {
            msg: "Price is required",
          },
        },
      },
      menu: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
          notEmpty: {
            msg: "Menu can not be empty",
          },
          notNull: {
            msg: "Menu is required",
          },
        },
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
          notEmpty: {
            msg: "Type can not be empty",
          },
          notNull: {
            msg: "Type is required",
          },
        },
      },
      flavor: DataTypes.STRING,
      restaurant: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
          notEmpty: {
            msg: "Restaurant can not be empty",
          },
          notNull: {
            msg: "Restaurant is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
