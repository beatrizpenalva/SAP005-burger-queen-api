const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')

const router = Router()

router.post('/', OrdersController.postOrder)
router.get('/', OrdersController.getAllOrders)
router.put('/:id', OrdersController.updateOrder)
router.get('/:id', OrdersController.getOrderById)
router.delete('/:id', OrdersController.deleteOrder)

module.exports = router
