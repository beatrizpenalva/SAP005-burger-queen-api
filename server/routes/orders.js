const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')

const router = Router()

router.post('/', OrdersController.post)
router.get('/', OrdersController.get)
router.put('/:id', OrdersController.update)
router.get('/:id', OrdersController.getById)
router.delete('/:id', OrdersController.delete)

module.exports = router
