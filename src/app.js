// Importando funcionalidades e bibliotecas necessárias
const express = require('express')
const path = require('path')
const cors = require('cors');

// Selecionando a porta
const porta = 3000

const app = express()
// Necessário para leitura do corpo de uma resposta Post
app.use(express.urlencoded({ extended: true }))
// Necessário para interpretação do formato JSON
app.use(express.json())
// Para evitar erros de CORS
app.use(cors());
// Para configurar o servidor para olhar dentro da pasta src por padrão
app.use(express.static(path.join(__dirname, 'src')));

const cores = [
  "verde limão", "verde musgo", "verde oliva", "verde água", "verde pálido",
  "verde pastel", "verde selva", "verde menta", "verde pinho", "verde esmeralda",
  "verde jade", "verde mar", "verde celadão", "verde persa", "verde azulado",
  "veridiano", "verdegris", "verde turquesa"
]

// Envia o index.html na rota base
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// Recebe as respostas e as processa.
// Neste caso, as respostas são exibidas no endereço da página, 
// são armazenadas na propriedade "query" da requisição,
// e tem limite total de 3000 caracteres.
// Não devemos usar GET para envio de informações sigilosas 
// como nome de usuário, senha e afins
app.get('/res', (req, res) => {
  console.log(req)

  // Verificação de erro, para caso a requisição seja inválida
  if (!req.query) {
    res.status(400).json({ error: erro.message });
    return
  }

  // Os nomes das variáveis correspondem a propriedade "name" dos inputs
  const { nome, email, cor } = req.query
  
  let opcoesDeCor = ""

  for (let c of cores) {
    opcoesDeCor += `<label>
      <input type="radio" name="cor" value="${c}" ${
        c === cor ? 'checked' : ''
      } disabled> ${c}</label><br>`
  }
  
  res.send(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" />
  <title>Obrigado</title>
</head>
<body>
  <h1>Obrigado pelas suas respostas!</h1>
  <p><strong>Nome:</strong> ${nome}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Cor favorita:</strong> ${cor}</p>
  <h2>Suas respostas:</h2>
  <form>
    ${opcoesDeCor}
  </form>
  <br>
  <a href="/">Voltar ao formulário</a>
</body>
</html>`)
})

// Recebe as respostas e as processa.
// Neste caso, as respostas não são escritas no endereço, 
// são armazenadas na propriedade "body" da requisição,
// e não possuem limite de tamanho.
// Usamos post quando o que o usuário deve enviar é
// sigiloso, tem tamanho grande, ou se trata de qualquer
// formato que não seja um texto.
app.post('/res', (req, res) => {
  console.log(req)

  // Verificação de erro, para caso a requisição seja inválida
  if (!req.body) {
    res.status(400).json({ error: erro.message });
    return
  }

  // Os nomes das variáveis correspondem a propriedade "name" dos inputs
  const { nome, email, cor } = req.body
  
  let opcoesDeCor = ""

  for (let c of cores) {
    opcoesDeCor += `<label>
      <input type="radio" name="cor" value="${c}" ${
        c === cor ? 'checked' : ''
      } disabled> ${c}</label><br>`
  }
  
  res.send(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" />
  <title>Obrigado</title>
</head>
<body>
  <h1>Obrigado pelas suas respostas!</h1>
  <p><strong>Nome:</strong> ${nome}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Cor favorita:</strong> ${cor}</p>
  <h2>Suas respostas:</h2>
  <form>
    ${opcoesDeCor}
  </form>
  <br>
  <a href="/">Voltar ao formulário</a>
</body>
</html>`)
})

// Inicializando o servidor na porta definida anteriormente
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`)
})
