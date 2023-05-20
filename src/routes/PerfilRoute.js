'use strict'

const express = require('express')
const router = express.Router()

const { verificarToken } = require('../middlewares/AutenticacaoMiddleware')
const perfilService = require('../services/PerfilService')

router.get('/', verificarToken, perfilService.buscarUltimos)

router.get('/:id', perfilService.buscarPorId)

router.post('', perfilService.cadastrar)

router.put('/:id', perfilService.editar)

router.post('/conexao', perfilService.criarConexao)

module.exports = router