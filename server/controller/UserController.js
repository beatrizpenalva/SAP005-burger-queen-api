const database = require("../db/models");

class UserController {
  static userExist(id) {
    const searchById = database.Users.findByPk(id);
    return searchById;
  }

  static getAllUsers(req, res, next) {
    const users = database.Users.findAll({
      order: [["id", "ASC"]],
      attributes: { exclude: ["password"] },
    });
    users
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => next({ code: 400, err }));
  }

  static getUserById(req, res, next) {
    const { id } = req.params;

    const user = database.Users.findOne(
      { attributes: { exclude: ["password"] } },
      {
        where: {
          id: Number(id),
        },
      }
    );

    user
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => next({ code: 404, err }));
  }

  static postUser(req, res, next) {
    const { name, email, password, role, restaurant } = req.body;

    if (!name || !email || !password || !role || !restaurant) {
      return res.status(401).json({ message: "Missing required data." });
    }

    const createUser = database.Users.findOrcreate({
      where: { email },
      defaults: { name, email, password, role, restaurant },
      // attributes: {
      //   exclude: ["password"],
      // },
    });

    createUser
      .then((result) => {
        // const newUser = result.email;

        // // if (!newUser) {
        // //   return res.status(403).json(next({ code: 403, err }));
        // // }

        return res.status(201).json(result);
      })
      .catch((err) => next({ code: 400, err }));
  }

  static async updateUser(req, res, next) {
    const { id } = req.params;
    const { name, password, role } = req.body;

    const isRegistred = await UserController.userExist(id);

    if (!isRegistred) {
      return res.status(404).json({ code: 404, message: "User not found." });
    }

    const updateUser = database.Users.update(
      { name: name, password: password, role: role },
      {
        where: {
          id: Number(id),
        },
      }
    );

    updateUser
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => next({ code: 400, err }));
  }

  static async deleteUser(req, res, next) {
    const { id } = req.params;

    const isRegistred = await UserController.userExist(id);

    if (!isRegistred) {
      return res.status(404).json({ code: 404, message: "User not found." });
    }

    const user = database.Users.destroy({
      where: {
        id: Number(id),
      },
    });

    user
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => next({ code: 400, err }));
  }
}

module.exports = UserController;
