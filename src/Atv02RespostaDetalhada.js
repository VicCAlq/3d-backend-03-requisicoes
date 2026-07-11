/*
  * [ATIVIDADE 2 - Resposta detalhada]
  *
  * Para esta questão, copie o que foi feito na atividade
  * anterior e realize a modificação abaixo:
  *
  * Modifique o comportamento da rota "/cadastro" de modo
  * que ela envie na sua resposta as informações que
  * foram preenchidas pelo usuário, incluindo-as no
  * conteúdo HTML enviado abaixo:
  *
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
  <p>${personagem[0]}</p>
  <p>${personagem[1]}</p>
  <p>${personagem[2]}</p>
  <p>${personagem[3]}</p>
  <p>${personagem[4]}</p>
</body>
</html>
  *
  * Ao final deste arquivo, use "export default app" para
  * exportar o objeto do servidor para os testes automatizados.
  */
import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'indexAtv.html'));
});

app.get('/cadastro', (req, res) => {
    const { nome, email, controle } = req.query;

    let personagens = [];
    if (req.query.personagem) {
        personagens = Array.isArray(req.query.personagem) 
            ? req.query.personagem 
            : [req.query.personagem];
    }
    const p1 = personagens[0] ? `<p>${personagens[0]}</p>` : '';
    const p2 = personagens[1] ? `<p>${personagens[1]}</p>` : '';
    const p3 = personagens[2] ? `<p>${personagens[2]}</p>` : '';
    const p4 = personagens[3] ? `<p>${personagens[3]}</p>` : '';
    const p5 = personagens[4] ? `<p>${personagens[4]}</p>` : '';

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
});

export default app;
