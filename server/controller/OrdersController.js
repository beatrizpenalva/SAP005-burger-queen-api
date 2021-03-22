const orders = {
    1: {
        client:'Gil do Vigor',
        table: '12',
        order: '1',
        attendant: 'Beatriz Penalva',
        products: [
            {
                id: '1',
                quantity: 3
            }
        ],
        // createAt:
        // updateAt:
    }
}
const OrdersController = {
  getAllOrders(req, res) {
    res.send(orders);
  }
}

module.exports = OrdersController;