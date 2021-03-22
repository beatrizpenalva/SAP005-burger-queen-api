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
    }
  }
  
  module.exports = UsersController;