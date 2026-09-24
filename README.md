# Anotações estudo JavaScript voltado para Fluig

## Operadores 
### Operdores de atribuição: permitem atribuição de valores, comparar informações e combinar condições em uma expressão.
- = atribui um valor
- += soma e atribui
- -= subtrai e atribui
- *= multiplica e atribui
- /= divide e atribui

### Operadores de comparação
- == igual
- != diferente
- \> maior que
- < menor que
- <= menor ou igual
- === alem do valor, verifica tambem o tipo de dado
- !== verifica se os valores ou os tipos são diferentes

### Operadores lógicos
- && retorna true apenas quando todas as condições são verdadeiras
- || retorna true quando pelo menos uma das condições é verdadeira
- ! inverte um valor boolean

## Controle de fluxo
- if: executa um bloco de código somente se a condição for verdadeira
- else: utilizado quando queremos executar um bloco de código caso a condição if seja falsa
- else if: utilizado quando exsitem várias condições para serem verificadas
- switch: utilizado quando uma variável pode assumir diferentes valores conhecidos. evita escrever vários else if para comprar a mesma variável. o _break_ encerra a execução do switch
- ternário: forma reduzida de escrever um if... else simples. quando existe uma decisão simples entre dois resultados

## Funções
bloco de código criado para executar uma determinada tarefa. em vez de escrever o mesmo código várias vezes, podemos agrupar dentro de uma função e executar sempre que necessário, tornando o código mais organizado, reutilizável e fácil de manter
```
function mostrarMensagem() {
    console.log('olá');
}

mostrarMensagem();
```
- parâmetros: são variáveis declaradas na definição da função, utlizadas para receber valores quando a função é chamada
- argumentos: valores passados para a função no momento em que ela é chamada
- return: em alguns casos, uma função precisa devolver um resultado, para isso, utilizamos a palavra-chave 'return'

- Function Declaration: utliza a palavra-chave _function_ seguida do nome da função
- Function Expression: a função passa a ser armazenada dentro da variável
- Função anônima: não possui nome
- Arrow Function: forma mais curta e moderna de escrever funções em js. utiliza o operador => em vez da palavra-chave _function_

> diferença entre express e anônima: uma função expression pode ser anônima, a diferença na expresion é que ela pode ter um nome

## Variáveis
- escopo global: variável criada fora de qualquer função ou bloco pode ser acessada em praticamente todo o programa
- escopo local: variável criada dentro de uma função existe apenas dentro dessa função
- escopo de bloco: um bloco é qualquer trecho de código delimitado por chaves {}. variáveis criada com let ou const dentro desse bloco só podem ser utilizadas nele
