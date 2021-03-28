"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
        type: DDataTypes.INTEGER,
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
        name: {
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
