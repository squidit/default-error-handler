## default-error-handler
> Handler padrão para o boom.

### Usando
```js
const defaultErrorHandler = require('../default-error-handler');

module.exports = function(request, reply) {
  return suaFuncao()
    .then(reply)
    .catch(defaultErrorHandler);
};
```

Caso queira realizar alguma ação de retornar o reply com o error realize a chamada assim:

```js
const defaultErrorHandler = require('../default-error-handler');

module.exports = function(request, reply) {
  return suaFuncao()
    .then(reply)
    .catch(err => {
        console.log(err);
        defaultErrorHandler(request, reply)(err);
    });
};
```
