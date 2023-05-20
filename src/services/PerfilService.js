'use strict'

let { perfis } = require('../database/db')

let geradorId = 1

module.exports = {
  buscarUltimos: (req, res) => {
    res.json(perfis.length > 5 ? perfis.slice(perfis.length - 5) : perfis)
  },
  buscarPorId: (req, res) => {
    let perfilId = req.params.id
    let perfilEncontrado = perfis.find((perfil) => perfil.id == perfilId)
    if (!perfilEncontrado) res.status(400).json({ message: "Erro ao buscar perfil" })
    res.json(perfilEncontrado)
  },
  cadastrar: (req, res) => {
    let novoPerfil = req.body
    if (novoPerfil) {
      novoPerfil.id = geradorId
      perfis.push(novoPerfil)
      geradorId++
      return res.json(novoPerfil)
    }
    else return res.status(400).json({ message: "Erro ao cadastrar perfil" })
  },
  editar: (req, res) => {
    let perfilId = req.params.id

    let perfilEncontrado = perfis.findIndex((perfil) => perfil.id == perfilId)
    if (perfilEncontrado === -1) return res.status(404).json({ message: "Erro ao buscar perfil" })

    let novoPerfil = req.body
    if (!novoPerfil) return res.status(400).json({ message: "Erro ao editar perfil" })

    perfis[perfilEncontrado] = { ...perfis[perfilEncontrado], ...novoPerfil }
    return res.json(perfis[perfilEncontrado])
  },
  criarConexao: (req, res) => {
    let info = req.body
    if (!info || !info.remetente || !info.destinatario) return res.status(400).json({ message: "Erro ao criar conexão" })

    let remetenteId = info.remetente
    let remetente = perfis.find(perfil => perfil.id === remetenteId)
    if (!remetente) return res.status(404).json({ message: "Erro ao buscar remetente" })

    let destinatarioId = info.destinatario
    let destinatario = perfis.find(perfil => perfil.id === destinatarioId)
    if (!destinatario) return res.status(404).json({ message: "Erro ao buscar destinatário" })

    remetente.conexoes.push(destinatarioId)
    destinatario.conexoes.push(remetenteId)

    return res.json({ message: "Conexão criada com sucesso" })
  }
}