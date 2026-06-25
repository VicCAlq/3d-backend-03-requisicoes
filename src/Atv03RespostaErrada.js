/*
  * [ATIVIDADE 3 - Resposta errada]
  *
  * Para esta questão, copie o que foi feito na atividade
  * anterior e realize a modificação abaixo:
  *
  * Modifique o comportamento da rota "/cadastro" para
  * que caso o usuário preencha mais ou menos que cinco
  * personagens, seja enviada uma mensagem de erro de acordo
  * com um dos dois textos abaixo:
  * 
  * Para mais que 5 personagens:
  * "Quantidade de personagens escolhida superior ao necessário (5)"
  *
  * Para menos que 5 personagens:
  * "Quantidade de personagens escolhida inferior ao necessário (5)"
  *
  * Ao final deste arquivo, use "export default app" para
  * exportar o objeto do servidor para os testes automatizados.
  */
const express = require('express')

const porta = 3000

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexAtv.html'))
})

app.get('/cadastro', (req, res) => {
   const { nome, email, controle, personagem } = req.query
   if( req.query.personagem>5);{
       res.json({ mensagem: "Quantidade de personagens escolhida superior ao necessário(5)"})
    }
    if( req.query.personagem<5);{
       res.json({ mensagem: "Quantidade de personagens escolhida inferior ao necessário (5)"})
    }
  if (req.query) {
    res.send(`<!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="light dark"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" />
        <title>Prazer em lhe conhecer</title>
      </head>
      <body>
        <h1>Cadastro feito com sucesso!</h1>
        <p><strong>Participante:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo de controle:</strong> ${controle}</p>
        <p><strong>Personagens escolhidos:</strong></p>
        <p>${personagem[0]}</p>
        <p>${personagem[1]}</p>
        <p>${personagem[2]}</p>
        <p>${personagem[3]}</p>
        <p>${personagem[4]}</p>
      </body>
      </html>`)
    }
  
  })
export default app