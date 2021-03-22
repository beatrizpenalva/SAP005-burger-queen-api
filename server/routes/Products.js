const { Router } = require('express')
const ProductsControllers = require('../controller/ProductsController')

const router = Router()

router.post('/', ProductsControllers.getAllProducts) //postar um novo produto
router.get('/', ProductsControllers.getAllProducts) //pegar todos os produtos
router.put('/:id', ProductsControllers.getAllProducts) //alterar informações de 1 produto específico
router.get('/:id', ProductsControllers.getAllProducts) //pegar um produto específico
router.delete('/:id', ProductsControllers.getAllProducts) //deletar um produto específico

module.exports = router