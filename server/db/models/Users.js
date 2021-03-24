const { DataTypes, Model } = require('sequelize');
const database = require('../database'); //arquivo que ele fez

class Users extends Model {}

Users.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false  
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false
  },
  role: {
      type: DataTypes.STRING,
      allowNull: false,
  }, 
  restaurant: {
      type: DataTypes.STRING,
      allowNull: false
  }
}, {
  // Other model options go here
  sequelize: database, // We need to pass the connection instance
  modelName: 'Users' // We need to choose the model name
});

Users.sync(); // não é a melhor maneira de fazer 

module.export = Users;