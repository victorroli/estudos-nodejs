# Simulação do problema do Cubo for devs

## Descrição

Simulação onde temos 6 fake API's (representadas por 6 funções) onde, cada uma retorna um objeto contendo o local de embarque, local de destino, horario de saída, horário de chegada e valor da passagem.

A ideia é fazer com que o tempo das requisições seja diminuído, com isso devemos utilizar o Promise.all() que acaba diminuindo o tempo das 6 requisições.

Após isso, fez-se a ordenação e listagem das passagens de menor para maior preço.
