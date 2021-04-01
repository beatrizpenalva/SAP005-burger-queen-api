"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // Users.hasMany(models.Orders, {
      //   foreignKey: "attendant_id",
      // });
    }
  }
  Users.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
          notEmpty: {
            msg: "Username can not be empty",
          },
          notNull: {
            msg: "Username is required",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
        notEmpty: true,
        validate: {
          notEmpty: {
            msg: "E-mail can not be empty",
          },
          notNull: {
            msg: "E-mail is required",
          },
          isEmail: {
            msg: "E-mail is invalid",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
          min: 6,
          max: 12,
          notEmpty: {
            msg: "Password can not be empty",
          },
          notNull: {
            msg: "Password is required",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
          notEmpty: {
            msg: "Role can not be empty",
          },
          notNull: {
            msg: "Role is required",
          },
        },
      },
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
      modelName: "Users",
    }
  );
  return Users;
};
