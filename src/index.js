const express = require('express')

const app = express()

const PORT = 3000

app.get(
  '/',
  (req, res) => res.send('Hello')
)

app.listen(
  PORT,
  () => console.warn(`Servidor rodando em http://localhost:${PORT}`)
)