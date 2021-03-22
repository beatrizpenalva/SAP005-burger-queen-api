const { Router } = require('express')
const ProductsRouter = require('./Products')
const UsersRouter = require('./Users')
const OrdersRouter = require('./Orders')

const router = Router()

router.use('/products', ProductsRouter)
router.use('/users', UsersRouter)
router.use('/orders', OrdersRouter)

module.exports = router
