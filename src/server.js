'use strict'

const express = require('express')

const loginRoute = require('./routes/LoginRoute')
const notificacaoRoute = require('./routes/NotificacaoRoute')
const perfilRoute = require('./routes/PerfilRoute')
const db = require('mongoose')

const api = express()
const uriMongo = 'mongodb+srv://apiperfilprofissional:apiperfilprofissional@cluster0.wemyr6w.mongodb.net/perfil-profissional?retryWrites=true&w=majority'

db
  .connect(uriMongo,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Banco conectado...'))
  .catch(err => console.error('ERRO ao tentar conecatr no banco', err))

api.use(express.json())
api.use(express.urlencoded())

api.get('/', (req, res) => {
  res.send("API Perfil Profissional")
})

api.use('/perfil', perfilRoute)
api.use('/notificacao', notificacaoRoute)
api.use('/login', loginRoute)

module.exports = api
