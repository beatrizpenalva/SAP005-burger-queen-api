const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')

const router = Router()

router.post('/', ProductsController.post)
router.get('/', ProductsController.get)
router.put('/:id', ProductsController.update)
router.get('/:id', ProductsController.getById)
router.delete('/:id', ProductsController.delete)

module.exports = router