// 1º importo a biblioteca do express e salvo em uma variável
const express = require('express')

// 2º instancio o express e salvo essa intanciação em uma variável
const app = express()

// criando uma variável com o número da porta
const port = 3000

app.use(express.json())
app.use(express.urlencoded());

// 3º adiciono ou registro uma rota no express
app.get('/', (req, res) => {
  res.send("API Perfil Profissional")
})

// ROTAS DE PERFIL
let geradorId = 1
let perfis = []

app.get('/perfil', (req, res) => {
  res.json(perfis.length > 5 ? perfis.slice(perfis.length - 5) : perfis)
})

app.get('/perfil/:id', (req, res) => {
  let perfilId = req.params.id
  let perfilEncontrado = perfis.find((perfil) => perfil.id == perfilId)
  if (!perfilEncontrado) res.status(400).json({ message: "Erro ao buscar perfil" })
  res.json(perfilEncontrado)
})

app.post('/perfil', (req, res) => {
  let novoPerfil = req.body
  if (novoPerfil) {
    novoPerfil.id = geradorId
    perfis.push(novoPerfil)
    geradorId++
    return res.json(novoPerfil)
  }
  else return res.status(400).json({ message: "Erro ao cadastrar perfil" })
})

app.put('/perfil/:id', (req, res) => {
  let perfilId = req.params.id

  let perfilEncontrado = perfis.findIndex((perfil) => perfil.id == perfilId)
  if (perfilEncontrado === -1) return res.status(404).json({ message: "Erro ao buscar perfil" })

  let novoPerfil = req.body
  if (!novoPerfil) return res.status(400).json({ message: "Erro ao editar perfil" })

  perfis[perfilEncontrado] = { ...perfis[perfilEncontrado], ...novoPerfil }
  return res.json(perfis[perfilEncontrado])
})

app.post('/perfil/conexao', (req, res) => {
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
})

// 4º coloco o express (servidor) para funcionar e rodar na porta 3000 e ficar escutando qualquer ação no brownser
app.listen(
  port,
  () => console.log(`Servidor rodando na porta ${port}...`)
)