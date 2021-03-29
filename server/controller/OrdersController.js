const database = require("../db/models");

class OrdersController {
  static get(req, res, next) {
    const orders = database.Orders.findAll();
    orders
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => next({ code: 403, err }));
  }

  static getById(req, res, next) {
    const { id } = req.params;
    const order = database.Orders.findAll({
      where: {
        id: Number(id),
      },
    });
    order
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => next({ code: 403, err }));
  }

  static post(req, res, next) {
    // const {
    //   table,
    //   client,
    //   totalPrice,
    //   attendant_id,
    //   chef_id,
    //   status,
    //   comments,
    //   processedAt,
    // } = req.body;

    // const createorder = database.orders.create({
    //   table,
    //   client,
    //   totalPrice,
    //   attendant_id,
    //   chef_id,
    //   status,
    //   comments,
    //   processedAt,
    // });

    const createOrder = database.Orders.create(req.body)
    createOrder
      .then((result) => {
        req.body.Products.forEach(async (item) => {
          // const product = await Product.findById(item.id);
          //const product = database.Orders.findByPk(item.id) //
          // if (!product) {
          //   return res.status(400);
          // }

          const listOfProducts = {
            order_id: result.id,
            product_id: item.id,
            quantity: item.quantity,
          };

          await database.OrderProducts.create(
            listOfProducts
          );

          // createOrderProducts.then((result) => {
          //   return res.status(201).json(result);
          // });
        });
        
        return res.status(201).json(result);
      })
      .catch(next);
  }

  static update(req, res, next) {
    const { id } = req.params;
    const { price, menu, flavor, restaurant } = req.body;
    const updateorder = database.orders.update(
      { price: price, menu: menu, flavor: flavor, restaurant: restaurant },
      {
        where: {
          id: Number(id),
        },
      }
    );
    updateorder
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch(next);
  }

  static delete(req, res, next) {
    const { id } = req.params;
    const order = database.orders.destroy({
      where: {
        id: Number(id),
      },
    });
    order
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch(next);
  }
}

module.exports = OrdersController;
