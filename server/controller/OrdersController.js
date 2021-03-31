const database = require("../db/models");

class OrdersController {
  // static get(req, res, next) {
  //   const orders = database.Orders.findAll();
  //   orders
  //     .then((result) => {
  //       res.status(200).json(result);
  //     })
  //     .catch((err) => next({ code: 403, err }));
  // }

  static get(req, res, next) {
    let orders = database.Orders.findAll({
      include:
        [{
          model: database.Products,
          as: 'orders',
          required: false,
          attributes: ['id', 'name', 'price', 'flavor'],
          through: {
            model: database.OrderProducts,
            as: 'orderProductsQt',
            attributes: ['qt']
          }
        }]
    });

    orders
      .then((result) => {
        let allOrders = result;
        allOrders.map(order => {
          return {
            "orderId": order.id,
            "client": order.client,
            "table": order.table,
            "status": order.status,
            "createAt": order.createAt,
            "updateAt": order.updateAt,
            "products": order.Orders.map(product => {
              return {
                "id": product.id,
                "name": product.name,
                "qt": product.orderProductsQt.qt,
                "price": product.price,
                "flavor": product.flavor
              }
            })
          }
        })
        res.status(200).json(allOrders);
      })
      .catch((err) => next({ code: 403, err }));
  }


  static getById(req, res, next) {
    const { id } = req.params;

    const order = await Orders.findOne({
      where: { id: Number(id) },
      include: {
        model: Products,
        as: 'products',
        attributes: ['id', 'name', 'flavor', 'price', 'menu', 'image', 'type'],
        through: {
          model: OrderProducts,
          as: 'quantity',
          attributes: ['quantity'],
        },
      },
    });

    order
      .then((result) => {
        const orderById = result.toJSON();

        const listOfOrderProducts = orderById.products.map((product) => ({
          ...product,
          quantity: product.quantity.quantity,
        }));
    
        const completeOrder = {
          ...order,
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
    const updateorder = database.Orders.update(
      { status: status, processedAt: processedAt },
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
    const order = database.Orders.destroy({
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
