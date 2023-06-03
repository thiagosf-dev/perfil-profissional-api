'use strict'

const express = require('express')
const router = express.Router()

const notificacaoService = require('../services/NotificacaoService')

// router.get('/:id', notificacaoService.buscarPorId)

// router.get('/perfil/:id', notificacaoService.buscarPorPerfilId)

router.post('', notificacaoService.cadastrar)

// router.put('/lida/:id', notificacaoService.marcarLida)

module.exports = router
