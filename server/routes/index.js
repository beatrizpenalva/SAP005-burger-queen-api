const { Router } = require('express')
const ProductsRouter = require('./ProductsEndpoints')
const UsersRouter = require('./UsersEndpoints')
const OrdersRouter = require('./OrdersEndpoints')

const router = Router()

router.use('/products', ProductsRouter)
router.use('/users', UsersRouter)
router.use('/orders', OrdersRouter)

module.exports = router
