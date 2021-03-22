const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')

const router = Router()

router.post('/', OrdersController.getAllOrders) //criar um novo pedido
router.get('/', OrdersController.getAllOrders) // pegar todos os pedidos
router.put('/:id', OrdersController.getAllOrders) //alterar informações de 1 pedido específico
router.get('/:id', OrdersController.getAllOrders) //pegar um pedido específico
router.delete('/:id', OrdersController.getAllOrders) //deletar um pedido

module.exports = router
