'use strict'

const express = require('express')

const loginRoute = require('./routes/LoginRoute')
const perfilRoute = require('./routes/PerfilRoute')

const api = express()

api.use(express.json())
api.use(express.urlencoded())

api.get('/', (req, res) => {
  res.send("API Perfil Profissional")
})

api.use('/perfil', perfilRoute)

api.use('/login', loginRoute)

module.exports = api