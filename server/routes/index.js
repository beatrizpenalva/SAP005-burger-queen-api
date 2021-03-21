const { Router } = require('express')
const ExampleRouter = require("./ExampleRouter")

const router = Router()

// aqui vai todas as rotas
router.use('/example', ExampleRouter);


// const productsRouter = require('./routes/products')
// router.use('/products', productsRouter)


module.exports = router
