[Deprecated] - Usar o https://github.com/squidit/sq-logger

## default-error-handler
> Handler padrão para o Boom.

Realiza o reply com o erro que ocorreu como erro do Boom.

Caso não seja informado qual erro do Boom é para utiliza (lançando um exceção já com o Boom), sempre é retornado um 500 e é omitido o erro para o usuário final.

Erros personalizados devem lançar seus erros no Boom conforme a [listagem oficial](https://github.com/hapijs/boom#http-4xx-errors).

### Usando
```js
const defaultErrorHandler = require('squid-default-error-handler');

module.exports = function(request, reply) {
  return suaFuncao()
    .then(reply)
    .catch(defaultErrorHandler);
};
```

Caso queira realizar alguma ação de retornar o reply com o error realize a chamada assim:

```js
module.exports = function(request, reply) {
  return suaFuncao()
    .then(reply)
    .catch(err => {
        console.log(err);
        defaultErrorHandler(request, reply)(err);
    });
};
```
