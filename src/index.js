// 1º importo a biblioteca do express e salvo em uma variável
const express = require('express')

// 2º eu instancio o express e salvo essa intanciação em uma variável
const app = express()

// criando uma variável com o número da porta
const port = 3000

// 3º adicionou ou registro uma rota no express
app.get('/clientes', (req, res) => {
  console.log('teste')

  // consulto no banco todos os clientes
  const clientes = [
    {
      id: 1,
      nome: 'Cliente 1'
    },
    {
      id: 2,
      nome: 'Cliente 2'
    }
  ]

  res.send(clientes)
})

// 4º colocar o express (servidor) para funcionar e rodar na porta 3000 e ficar escutando qualquer ação no brownser
app.listen(
  port,
  () => console.log(`Servidor rodando na porta: ${port}`)
)