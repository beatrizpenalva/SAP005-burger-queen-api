const { Router } = require('express')
//const ExampleController = require('../controller/ExampleController')

const router = Router()

// aqui vai as requisições

//router.get("/", ExampleController.getAllExamples)

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'GET na rota de produtos'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).send({
        message: 'POST na rota de produtos'
    })
})

module.exports = router