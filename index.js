const express = require('express')
const routes = require('./server/routes/index')
const app = express()
const port = 3000
// const cors = require('cors')
// app.use(cors());

app.use(express.json()) // for parsing application/json 

app.use('*', (req, res, next) => {
  console.log(req.method, req.baseUrl, req.body)
  next()
})

app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})