const { Router } = require('express')
const UserController = require('../controller/UserController')

const router = Router()

router.post('/', UserController.post)
router.get('/', UserController.get)
router.put('/:id', UserController.update)
router.get('/:id', UserController.getById)
router.delete('/:id', UserController.delete)

module.exports = router