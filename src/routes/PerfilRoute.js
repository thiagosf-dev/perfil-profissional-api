'use strict'

const express = require('express')
const router = express.Router()

const { verificarToken } = require('../middlewares/AutenticacaoMiddleware')
const perfilService = require('../services/PerfilService')

// router.get('/', verificarToken, perfilService.buscarUltimos)

// router.get('/:id', perfilService.buscarPorId)

router.post('', async (req, res) => {
  const resposta = await perfilService.cadastrar(req.body)
  res.json(resposta)
})

// router.post('/conexao', perfilService.criarConexao)

// router.put('/:id', perfilService.editar)

// router.delete('/:id', perfilService.remover)

module.exports = router
