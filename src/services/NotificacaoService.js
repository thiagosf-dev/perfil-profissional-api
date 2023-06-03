'use strict'

module.exports = {
  // buscarPorPerfilId: (req, res) => {
  //   let perfilId = Number(req.params.id)
  //   let resposta = notificacoes.filter(notificacao => notificacao.destinatario === perfilId || notificacao.remetente === perfilId)
  //   res.json(resposta)
  // },
  // buscarPorId: (req, res) => {
  //   let notificacaoId = req.params.id
  //   let notificacaoEncontrada = notificacoes.find((notificacao) => notificacao.id == notificacaoId)
  //   if (!notificacaoEncontrada) res.status(404).json({ message: "Notificação não encontrada" })
  //   res.json(notificacaoEncontrada)
  // },
  cadastrar: (req, res) => {
    let novaNotificacao = req.body
    if (novaNotificacao) {
      novaNotificacao.id = geradorId
      notificacoes.push(novaNotificacao)
      geradorId++
      return res.json(novaNotificacao)
    }
    else return res.status(400).json({ message: "Erro ao cadastrar notificação" })
  },
  // marcarLida: (req, res) => {
  //   let notificacaoId = req.params.id

  //   let notificacaoEncontrada = notificacoes.find((notificacao) => notificacao.id == notificacaoId)
  //   if (!notificacaoEncontrada) return res.status(404).json({ message: "Notificação não encontrada" })

  //   notificacaoEncontrada.lida = true

  //   return res.json({ message: 'A mensagem foi marcada como lida' })
  // }
}
