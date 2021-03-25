const database = require('../db/models')

class UserController {

  static async getAllUsers(req, res) {
    const users = await database.Users.findAll()
    return res.status(200).json(users)
  }

  static async getUserById(req, res) {
    const { usersId } = req.params
    const user = await database.Users.findAll({
      where: {
        id: Number(usersId)
      }
    });
    return res.status(200).json(user)
  }

  static async postUser(req, res) {
    const { name, email, password, role, restaurant } = req.body
    const createUser = await database.Users.create({
      name,
      email,
      password,
      role,
      restaurant
    });
    return res.status(201).json(createUser)
  }

  static async updateUser(req, res) {
    const { usersId } = req.params
    const { name, password, role } = req.body
      await database.Users.update({ name: name, password: password, role: role }, {
        where: {
          id: Number(usersId)
        }  
      })
    }


  static async deleteUser(req, res) {
    const { usersId } = req.params 
    const user = await database.Users.findAll({
      where: {
        id: Number(usersId)
      }
    });
    await user.destroy();
  }

}  
module.exports = UserController
