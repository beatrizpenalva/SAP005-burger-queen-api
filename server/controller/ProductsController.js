const database = require("../db/models");

class ProductsController {
  static get(req, res, next) {
    const products = database.Products.findAll({
      order: [['id', 'ASC']],
    });
    products
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => next({ code: 403, err }));
  }

  static getById(req, res, next) {
    const { id } = req.params;
    const product = database.Products.findOne({
      where: {
        id: Number(id),
      },
    });
    product
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => next({ code: 403, err }));
  }

  static post(req, res, next) {
    const { name, price, menu, type, flavor, restaurant } = req.body;
    const createProduct = database.Products.create({
      name,
      price,
      menu,
      type,
      flavor,
      restaurant
    });
    createProduct
      .then((result) => {
        return res.status(201).json(result);
      })
      .catch(next);
  }

  static update(req, res, next) {
    const { id } = req.params;
    const { price, menu, flavor, restaurant } = req.body;
    const updateProduct = database.Products.update(
      { price: price, menu: menu, flavor: flavor, restaurant: restaurant },
      {
        where: {
          id: Number(id),
        },
      }
    );
    updateProduct
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch(next);
  }

  static delete(req, res, next) {
    const { id } = req.params;
    const product = database.Products.destroy({
      where: {
        id: Number(id),
      },
    });
    product
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch(next);
  }
}

module.exports = ProductsController;
