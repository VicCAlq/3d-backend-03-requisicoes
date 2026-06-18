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


import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.sendFile('indexAtv.html', { root: './src' });
});

app.get('/cadastro', (req, res) => {
  const { nome, email, controle, personagem } = req.query;

  const personagens = [].concat(personagem || []);

  if (personagens.length > 5) {
    return res.send('Quantidade de personagens escolhida superior ao necessário (5)');
  }

  if (personagens.length < 5) {
    return res.send('Quantidade de personagens escolhida inferior ao necessário (5)');
  }

  res.send(`
<!DOCTYPE html>
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

  <p>${personagens[0]}</p>
  <p>${personagens[1]}</p>
  <p>${personagens[2]}</p>
  <p>${personagens[3]}</p>
  <p>${personagens[4]}</p>
</body>
</html>
  `);
});

export default app;
