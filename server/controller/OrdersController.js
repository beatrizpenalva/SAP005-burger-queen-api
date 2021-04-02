const database = require("../db/models");

class OrdersController {
  static orderExist(id) {
    const searchById = database.Orders.findByPk(id);
    return searchById;
  }

  static getAllOrders(req, res, next) {
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
      .catch((err) => next({ code: 400, err }));
  }

  static getOrderById(req, res, next) {
    const { id } = req.params;

    const order = database.Orders.findOne({
      where: { id: Number(id) },
      include: {
        model: database.Products,
        as: "products",
        attributes: ["id", "name", "flavor", "price", "menu", "type"],
        through: {
          model: database.OrderProducts,
          as: "addInfo",
          attributes: ["extra_id", "quantity"]
        }
      }
    });

    order
      .then(async (result) => {
        const orderById = await result.toJSON();

        const listOfOrderProducts = orderById.products.map((product) => {
          const list = {
            ...product,
            quantity: product.addInfo.quantity,
            extra_id: product.addInfo.extra_id
          }

          delete list.addInfo
          return list
        });

        const completeOrder = {
          ...orderById,
          products: listOfOrderProducts,
        };

        return res.status(200).json(completeOrder);
      })
      .catch((err) => next({ code: 400, err }));
  }

  static postOrder(req, res, next) {
    const {
      table,
      client,
      totalPrice,
      attendant_id,
      status,
      comments,
      processedAt,
      restaurant,
      products
    } = req.body;

    const createOrder = database.Orders.create({
      table,
      client,
      totalPrice,
      attendant_id,
      status,
      comments,
      processedAt,
      restaurant
    });

    createOrder
      .then((result) => {
        products.forEach(async (item) => {
          const listOfProducts = {
            order_id: result.id,
            product_id: item.id,
            extra_id:item.extra_id,
            quantity: item.quantity,
          };

          await database.OrderProducts.create(listOfProducts);
        });

        return res.status(201).json(result);
      })
      .catch(next);
  }

  static async updateOrder(req, res, next) {
    const { id } = req.params;
    const { status, processedAt } = req.body;
    const isRegistred = await OrdersController.orderExist(id);

    if (!isRegistred) {
      return res.status(404).json({ code: 404, message: "Order not found." });
    }

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

  static async deleteOrder(req, res, next) {
    const { id } = req.params;
    const isRegistred = await OrdersController.orderExist(id);

    if (!isRegistred) {
      return res.status(404).json({ code: 404, message: "Order not found." });
    }

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
