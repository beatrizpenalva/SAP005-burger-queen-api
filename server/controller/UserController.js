const database = require('../db/models')

class UserController {

  static async getAllUsers(req, res) {
    const users = await database.Users.findAll()
    return res.status(200).json(users)
  }

  static async getUserById(req, res) {
    const { usersId } = req.params //o nome dessa const precisa ser igual ao req.param que passamos na rota!
    const user = await database.Users.findAll({
      where: {
        id: Number(usersId)
      }
    });
    return res.status(200).json(user)
  }

  static async postUser(req, res) {
    const { name, email, password, role, restaurant } = req.params //o nome dessa const precisa ser igual ao req.param que passamos na rota!
    const createUser = await database.Users.create({
      name,
      email,
      password,
      role,
      restaurant
    });
    return res.status(201).json(createUser) //return with ID -> 201 (CREATED)
  }

  static async deleteUser(req, res) {
    const { usersId } = req.params //o nome dessa const precisa ser igual ao req.param que passamos na rota!
    const user = await database.Users.findAll({
      where: {
        id: Number(usersId)
      }
    });
    await user.destroy();
  }

}  


// const jane = await User.create({ name: "Jane" });
// console.log(jane.name); // "Jane"
// jane.name = "Ada";
// // the name is still "Jane" in the database
// await jane.save();
// // Now the name was updated to "Ada" in the database!

module.exports = UserController