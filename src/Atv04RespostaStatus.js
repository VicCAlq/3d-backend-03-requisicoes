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
