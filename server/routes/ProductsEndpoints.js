const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')

const router = Router()

router.post('/', ProductsController.postProduct)
router.get('/', ProductsController.getAllProducts)
router.put('/:id', ProductsController.updateProduct)
router.get('/:id', ProductsController.getProductById)
router.delete('/:id', ProductsController.deleteProduct) 

module.exports = router