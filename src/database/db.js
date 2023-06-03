'use strict'

let perfis = [
  {
    "conexoes": [],
    "id": 1,
    "nome": "Leonardo",
    "usuario": {
      "email": "leo@email.com",
      "senha": "123",
    },
  },
]

let notificacoes = [
  {
    id: 1,
    tipo: 'Contato',
    titulo: 'Notificacao 1',
    descricao: 'Esta é a notificação de número 1',
    lida: false,
    remetente: 1,
    destinatario: 1
  }
]

module.exports = {
  notificacoes,
  perfis
}
