const database = require("../db/models");

class OrdersController {
  static get(req, res, next) {
    const orders = database.Orders.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          model: database.Products,
          as: "products",
          attributes: ["id", "name", "flavor", "price", "menu", "type"],
          through: {
            model: database.OrderProducts,
            as: "quantity",
            attributes: ["quantity"],
          },
        },
      ],
    });

    orders
      .then(async (result) => {
        const ordersObjects = await result.map((order) => order.toJSON());

        const allOrders = ordersObjects.map((order) => ({
          ...order,
          products: order.products.map((product) => ({
            ...product,
            quantity: product.quantity.quantity,
          })),
        }));

        res.status(200).json(allOrders);
      })
      .catch((err) => next({ code: 403, err }));
  }

  static getById(req, res, next) {
    const { id } = req.params;

    const order = database.Orders.findOne({
      where: { id: Number(id) },
      include: {
        model: database.Products,
        as: "products",
        attributes: ["id", "name", "flavor", "price", "menu", "type"],
        through: {
          model: database.OrderProducts,
          as: "quantity",
          attributes: ["quantity"],
        },
      },
    });

    order
      .then(async (result) => {
        const orderById = await result.toJSON();

        const listOfOrderProducts = orderById.products.map((product) => ({
          ...product,
          quantity: product.quantity.quantity,
        }));

        const completeOrder = {
          ...orderById,
          products: listOfOrderProducts,
        };

        return res.status(200).json(completeOrder);
      })
      .catch((err) => next({ code: 403, err }));
  }

  static post(req, res, next) {
    const {
      table,
      client,
      totalPrice,
      attendant_id,
      chef_id,
      status,
      comments,
      processedAt,
      products,
    } = req.body;

    const createOrder = database.Orders.create({
      table,
      client,
      totalPrice,
      attendant_id,
      chef_id,
      status,
      comments,
      processedAt,
    });

    createOrder
      .then((result) => {
        products.forEach(async (item) => {
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

          await database.OrderProducts.create(listOfProducts);
        });

        return res.status(201).json(result);
      })
      .catch(next);
  }

  static update(req, res, next) {
    const { id } = req.params;
    const { status, processedAt } = req.body;
    const updateOrder = database.Orders.update(
      { status: status, processedAt: processedAt },
      {
        where: {
          id: Number(id),
        },
      }
    );
    updateOrder
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch(next);
  }

  static delete(req, res, next) {
    const { id } = req.params;

    const orderProducts = database.OrderProducts.destroy({
      where: {
        order_id: Number(id),
      },
    });

    const order = database.Orders.destroy({
      where: {
        id: Number(id),
      },
    });

    orderProducts
      .then(() => {
        order.then((result) => {
          return res.status(200).json(result);
        });
      })
      .catch(next);
  }
}

module.exports = OrdersController;
