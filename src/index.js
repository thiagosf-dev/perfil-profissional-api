'use strict'

const api = require('./server')

const port = 3000

api.listen(
  port,
  () => console.log(`Servidor rodando em http://localhost:${port}...`)
)
