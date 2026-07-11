/*
  * [ATIVIDADE 1 - Resposta simples]
  *
  * Crie um aplicativo Express com duas rotas do tipo "GET".
  * A primeira rota deve ser para "/", e ao acessar ela,
  * o arquivo "indexAtv.html" deve ser enviado.
  *
  * A segunda rota deve ter o endereço "/cadastro".
  * Ela é acessada quando o formulário do "indexAtv.html"
  * é enviado. Quando esta rota for acessada, ela deve
  * retornar a resposta abaixo:
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
</body>
</html>
  *
  * Ao final deste arquivo, use "export default app" para
  * exportar o objeto do servidor para os testes automatizados.
  */

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexAtv.html'))
})

app.get('/cadastro', (req, res) => {
  console.log(req)

  if (!req.query) {
    res.status(400).json({ error: erro.message });
    return
   
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
</body>
</html>`)
})

export default app

   
  }

