'use strict'

const database = require('../database/db')

module.exports = {
  autenticar: (req, res) => {
    let usuario = req.body

    if (!usuario.email && !usuario.senha) return res.status(400).json({ message: 'Dados incompletos.' })

    let usuarioEncontrado = database.perfis.find(perfil => perfil.usuario.email == usuario.email && perfil.usuario.senha == usuario.senha)
    if (!usuarioEncontrado) return res.status(200).json({ message: 'Credenciais inválidas.' })

    return res.status(200).json({
      id: usuarioEncontrado.id,
      token: '1234567890'
    })
  }
}