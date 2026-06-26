/*
  * [ATIVIDADE 3 - Resposta status]
  *
  * Para esta questão, copie o que foi feito na atividade
  * anterior e realize a modificação abaixo:
  *
  * Modifique o comportamento da resposta de erro da
  * rota "/cadastro" para que caso o usuário preencha mais
  * ou menos que cinco personagens, seja enviada uma mensagem
  * de erro com o status 422, que corresponde a requisição no
  * formato correto e com informações válidas, mas o servidor
  * não pode processar as informações.
  *
  * Na mensagem de erro da resposta, informe um dos dois
  * textos abaixo:
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
const express = require('express');
const path = require('path')
const cors = require('cors')
const app = express();
const porta = 3000;
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexAtv.html'))
})

app.get('/cadastro', (req, res) => {
  if(req.query) {
     const { nome, email, controle, personagem } = req.query

     if (typeof(personagem) === "string") {
       res.status(422).json({ erro: "Quantidade de personagens escolhida inferior ao necessário (5)"})
     } else if (personagem.length > 5) {
       res.status(422).json({ erro: "Quantidade de personagens escolhida superior ao necessário (5)"}) 
     } else if (personagem.length < 5) {
     res.status(422).json({ erro: "Quantidade de personagens escolhida inferior ao necessário (5)"}) 
     } else {
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
</html>`);
     }
    
  }
    
});

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`)
})

module.exports = app