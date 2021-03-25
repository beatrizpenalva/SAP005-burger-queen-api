const { Router } = require('express')
const UserController = require('../controller/UserController')

const router = Router()

router.post('/', UserController.postUser)
router.get('/', UserController.getAllUsers)
//router.put('/:id', UserController.getAllExamples) //alterar informações de 1 usuário específico
router.get('/:id', UserController.getUserById)
router.delete('/:id', UserController.deleteUser)

module.exports = router