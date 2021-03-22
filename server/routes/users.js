const { Router } = require('express')
const ExampleController = require('../controller/ExampleController')

const router = Router()

router.post('/', ExampleController.getAllExamples) //criar um novo usuário
router.get('/', ExampleController.getAllExamples) //pegar todos os usuários
router.put('/:id', ExampleController.getAllExamples) //alterar informações de 1 usuário específico
router.get('/:id', ExampleController.getAllExamples) //pegar um usuário
router.delete('/:id', ExampleController.getAllExamples) //deletar um usuário

module.exports = router