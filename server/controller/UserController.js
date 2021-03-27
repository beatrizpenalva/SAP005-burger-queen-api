const database = require('../db/models')

class UserController {

  static get(req, res, next) {
    const users = database.Users.findAll()
    users
      .then((result) => {
        res.status(200).json(result)
      })
      .catch((err) => next({code:403, err}));
  }

  static getById(req, res, next) {
    const { usersId } = req.params
    const user = database.Users.findAll({
      where: {
        id: Number(usersId)
      }
    });
    user
      .then((result) => {
        res.status(200).json(result)
      })
      .catch((err) => next({code:403, err}));
  }

  static post(req, res, next) {
    const { name, email, password, role, restaurant } = req.body
    const createUser = database.Users.create({
      name,
      email,
      password,
      role,
      restaurant
    });
    createUser
      .then((result) => {
        return res.status(201).json(result)
    })
      .catch(next)
  }

  static update(req, res, next) {
    const { usersId } = req.params
    const { name, password, role } = req.body
    const updateUser = database.Users.update({ name: name, password: password, role: role }, {
        where: {
          id: Number(usersId)
        }  
    })
    updateUser
      .then((result)=> {
        return res.status(200).json(result)
      })
      .catch(next)
    }


  static delete(req, res, next) {
    const { usersId } = req.params 
    const user = database.Users.findAll({
      where: {
        id: Number(usersId)
      }
    });
    user
      .then((result) => {
        result.destroy();
      })
      .catch(next);
  }
}

module.exports = UserController
