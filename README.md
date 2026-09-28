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


## Estrutura de dados
- objetos: permitem agrupar diversas informações relacionadas em uma única estrutura. em vez de criar várias variáveis separadas, podemos armazenar tudo dentro de um único objeto. cada informação recebe o nome de propriedade
```
const pessoa = {
    nome: 'maria',
    idade: 25,
    cidade: 'são paulo'
};
```
- array: utilizado para armazenar vários valores em uma única variável
    - indices: posição do item
    - push: adiciona um item ao final do array
    - unshift:adiciona um item ao início do array
    - spread: adiciona um item ao início do array
    - pop: remove o último item
    - length: retorna a quantidade de elementos

- loops
    - for: quando sabemos quantas vezes desejamos repetir. permite usar break e continue. é mais rápido, pois é um laço simples e controlado diretamente pela linguagem
    - while: repete enquanto uma condição for verdadeira
    - for.. of: percorre os elementos de um array. permite usar break e continue. muito eficiente e possui uma sintaxe mais simples
    - forEach: percorre todos os elementos de um array. é um pouco mais lento porque ele percorre cada elemento e o js faz a chamada de uma função
    > loop infinito: quando uma estrutura de repetição nunca encontra uma condição para ser encerrada

- manipulação de string
    - length: quantidade de caracteres
    - toUpperCase(): converte para letras maiúsculas
    - toLowerCase(): converte para letras minúsculas
    - trim(): remove espaços no início e no fim
    - replace(): substitui um trecho da string
    - includes(): verifica se um texto existe dentro da string
    - split(): divide uma string em um array
    - template string: permite inserir variáveis diretamente no texto utilizando crases e a sintaxe ${}

- números e boleanos
    - Number(): converte um valor para número
    - parseInt(): converte para número inteiro
    - parseFloat(): converte para número decimal
    - toFixed(): define a quantidade de casas decimais
    - math.round(): arredonda para o inteiro mais próximo
    - math.floor(): arrendonda para baixo
    - math.ceil(): arredonda para cima
    - math.random(): gera um número aleatório entre 0 e 1
    - boolean(): converte um valor para verdadeiro ou falso

## DOM
Document Object Model (Modelo de objeto de documento): representa a estrutura de uma página HTML. quando uma página é carregada no navegador, o HTML é transformado em uma estrutura organizada em forma de árvore, que permite que o js encontre, leia, altere, adicione ou remova elementos da página. é a ponte entre o HTML e o JS

Cada tecnologia possui uma função diferente no desenvolvimento de uma página web
- HTML define a estrutura
- CSS define a aparência
- JavaScript adiciona comportamento e interatividade, utilizando o DOM para acessar e manipular os elementos criados pelo HTML

Para encontrar os elementos na página, são usadas a função de seletores e assim ler suas informações, alterar seu conteúdo, modificar estilos ou adicionar eventos
- getElementById(): localiza um elemento utilizando seu atributo *id*. como o id deve ser único na página, esse método sempre retorna apenas *um elemento*. utilizar quando o elemento possuir um id e souber exatamente qual elemento deseja usar
- querySelector(): localiza o primeiro elemento que corresponde ao seletor informado. utiliza a mesma sintaxe dos seletores CSS. pode selecionar elementos por id, classe, nome da tag, atributos, entre outros...
- querySelectorAll(): retorna todos os elementos que correpondem ao seletor informado, resultando uma coleção de elementos
- textContent(): utilizada para ler ou alterar apenas o texto de um elemento, não interpreta HTML
- innerHTML: permite ler ou alterar o conteúdo HTML de um elemento, interpreta as tags HTML
- value: utilizada para ler ou alterar o valor de campos de formulário. muito utilizada com input, textarea, select
- classList: permite manipular as classes CSS de um elemento, podendo adicionar, remover ou verificar classes
    - add(): adiciona classe
    - remove(): remove classe
    - toggle(): adiciona a classe caso ela não exista e remove caso ela já exista
    - contains(): verifica se uma classe existe
- style: permite alterar estilos CSS diretamente do JS
- atributos HTML
    - setAttribute(): adiciona ou altera um atributo de um elemento HTML
    - getAttribute(): retorna o valor de um atributo
- addEventListener(): utilizado para associar um evento a um elemento
    - click
    - input
    - change
```
elemento.addEventListener("evento", function() {
    //código executado quando o evento acontecer
})
```
- formulários: utilizados para receber informações digitadas pelo usuário. presentes em praticamente todos os sites e sistemas
    - document.forms
    - submit: quando o formulário é enviado
    - preventDefault: para impedir o carregamento da página ao enviar um formulário
