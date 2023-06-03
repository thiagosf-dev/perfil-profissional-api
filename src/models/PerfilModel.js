'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

const perfilSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    dataNascimento: {
      type: Date,
      required: true,
    },
    disponibilidadeMudanca: {
      type: Boolean,
      required: true,
    },
    disponibilidadeHorario: {
      type: String,
      required: true,
      enum: ['Integral', 'Meio Período'],
    },
    usuario: {
      email: {
        type: String,
        required: true,
        unique: true,
      },
      senha: {
        type: String,
        required: true,
        select: false,
      },
    },
    educacao: [
      {
        instituicao: {
          type: String,
        },
        ingresso: {
          type: Date,
        },
        conclusao: {
          type: Date,
        },
        nivelEscolaridade: {
          type: String,
          required: true,
          enum: ['Doutorado', 'Ensino Fundamental', 'Ensino Médio', 'Ensino Superior', 'Mestrado', 'Pós Grduação']
        },
      },
    ],
    certificacoes: [
      {
        instituicao: {
          type: String,
        },
        titulo: {
          type: String,
        },
        cargaHoraria: {
          type: Number,
        },
      },
    ],
    conexoes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PerfilModel',
      },
    ],
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('PerfilModel', perfilSchema)
