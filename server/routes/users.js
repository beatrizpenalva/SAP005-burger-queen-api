const { Router } = require('express')
const UsersControllers = require('../controller/UsersController')

const router = Router()

router.post('/', UsersControllers.getAllUsers) //criar um novo usuário
router.get('/', UsersControllers.getAllUsers) //pegar todos os usuários
router.put('/:id', UsersControllers.getAllUsers) //alterar informações de 1 usuário específico
router.get('/:id', UsersControllers.getAllUsers) //pegar um usuário
router.delete('/:id', UsersControllers.getAllUsers) //deletar um usuário

module.exports = router