const database = require("../db/models");

class ProductsController {
  static productExist(id) {
    const searchById = database.Products.findByPk(id);
    return searchById;
  }

  static getAllProducts(req, res, next) {
    const products = database.Products.findAll({
      order: [['id', 'ASC']],
    });
    products
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => next({ code: 400, err }));
  }

  static getProductById(req, res, next) {
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
      .catch((err) => next({ code: 400, err }));
  }

  static postProduct(req, res, next) {
    const { name, price, menu, type, flavor, restaurant } = req.body;

    if (!name || !price || !menu || !type || !restaurant) {
      return res.status(401).json({ message: "Missing required data." });
    }

    const createProduct = database.Products.findOrCreate({
      where: { name },
      defaults: { name, price, menu, type, flavor, restaurant }
    });

    createProduct
      .then((result) => {
        const [productObj, status] = result;

        if (status) {
          return res.status(201).json(productObj.toJSON());
        } else {
          return res.status(403).json({ code: 403, msg: "Email already used" });
        }
      })
      .catch((err) => next({ code: 400, err }));
  }

  static async updateProduct(req, res, next) {
    const { id } = req.params;
    const { price, menu, flavor, restaurant } = req.body;
    
    const isRegistred = await ProductsController.productExist(id);

    if (!isRegistred) {
      return res.status(404).json({ code: 404, message: "Product not found." });
    }

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
      .catch((err) => next({ code: 400, err }));
  }

  static async deleteProduct(req, res, next) {
    const { id } = req.params;

    const isRegistred = await ProductsController.productExist(id);

    if (!isRegistred) {
      return res.status(404).json({ code: 404, message: "Product not found." });
    }

    const product = database.Products.destroy({
      where: {
        id: Number(id),
      },
    });

    product
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => next({ code: 400, err }));
  }
}

module.exports = ProductsController;
