  const Users = require('../db/models/Users')
  const users = {
      1: {
          name:'Beatriz Penalva',
          email: 'biapenalva@gmail.com',
          password: '123456',
          role: 'Hall'
      },
      2: {
        name: 'Angelo Oliveira',
        email: 'agomelgaco@gmail.com',
        password: '123456',
        role: 'Kitchen'
      }
  }

  const UsersController = {
    getAllUsers(req, res) {
      res.send(users);
    },
    createUser() {
      try {
        Users.create({
          firstName: 'Gabriel', 
          lastName: 'Ramos', 
          email: 'gabs@lab.com',
          password: '123123',
          role: 'Attendant',
          restaurant: 'Burgerlicious'
        })
        console.log('Usuário criado com sucesso ')
      }
      catch (error) {
        console.log('Deu ruim', error)
      }
    }
  }
  //findAll - findOne
  //update & delete - não foi gabs que falou,..
  module.exports = UsersController;