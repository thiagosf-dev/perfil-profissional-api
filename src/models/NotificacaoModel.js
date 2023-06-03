'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

const notificacaoSchema = new Schema(
  {
    tipo: {
      type: String,
      required: true,
      enum: ['Contato', 'Solicitação de amizade'],
    },
    titulo: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    lida: {
      type: Boolean,
      required: true,
    },
    remetente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PerfilModel',
    },
    destinatario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PerfilModel',
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('NotificacaoModel', notificacaoSchema)
