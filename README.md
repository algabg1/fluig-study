# Fluig
## WCM
Web Content Management: gerenciamento de conteúdo da web
- criar portais
- interfaces personalizadas

Estrutura da página:
- página: constituída por um layout
- layout: define a composição de uma página
- slots: espaços pré-definidos dentro de um layout
- widget: componente de interface com o usuário responsável por montar o fragnmento de uma página

Recursos da página:
- opções de menu: agrupados ou sem acgupamento
- ícones nas páginas

Widgets:
- componentes interativos
- acesso centralizado
- visualização de gráficos e dashboards
- integração com aplicações de maneira simples
- acesso rápido a relatórios e documentos
- acesso a endereços web

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

## Consumindo API
Fetch API é o recurso do JS utilizado para realizar requisições para APIs
```
fetch("https://jsonplaceholder.typicode.com/users");
```

- response: objeto de retorno, contém informações sobre a resposta da API
    - .then(): utilizado para executar um código quando a resposta da requisição estiver disponível
    ```
    fetch(url)
    .then(function(response){
        console.log(response);
    });
    ```
- headers: são informações enviadas junto com a requisição, um do smais utilizados é _Content-Type_, informando qual o formato dos dados enviados, utilizar quando for enviar dados com métodos PUT, POST e DELETE.
```
headers: {"Content-Type": "application/json"}
```

- .catch(): utilizado para tratar erros que podem ocorrer durante uma requisição
```
fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(erro){
    console.log("erro no endpoint:", erro)
})
```
- json: formato de retorno
```
{
    id: 1,
    nome: "maria",
    idade: 25
}
```
- response.json(): quando se utiliza o fecth(), a resposta ainda não está pronta para ser utilizada, precisa converter para um objeto JS
```
fetch(url)
    .then(function(response){
        return repsonse.json();
    });
```
- JSON.stringify(): processo inverso do response.json(). transformo um objeto JS em uma string JSON
```
const usuario = {nome: "maria", idade: 25};
const json = JSON.stringify(usuario);
console.log(json); // resultado {"nome":"maria","idade":"25"}
```
- Consumindo API pública
```
fetch("https:/jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json();
})
.then(function(usuarios){
    console.log(usuarios);
})
.catch(function(erro){
    console.log("erro no endpoint:", erro);
});
/*
resultado

[
    {
        id: 1,
        name: "leanne grahan",
        ...
    },
    {
        id: 2,
        name: "ervin howell",
        ...
    }
]

*/

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json();
})
.then(function(usuarios){
    usuarios.forEach(function(usuario){
        console.log(usuario.name);
    });
})
.catch(function(erro){
    console.log("erro no endpoint:", erro)
});
/*
Resultado

Leanne Graham
Ervin Howell
Clementine Bauch
Patricia Lebsack
Chelsey Dietrich

*/
```
- POST
```
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "João da Silva",
        email: "joao@email.com"
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});
```
- PUT
```
fetch("https://jsonplaceholder.typicode.com/users/1",
{
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 1,
        name: "Joao SIlva Atualizado",
        email: "novo@email.com"
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});
```
- DELETE
```
fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "DELETE"
})
.then(function(response){
    console.log("usuario removido com sucesso!")
})
.catch(function(erro){
    console.log("erro:", erro);
});
```

## Desenvolvendo com ES6+ no TOTVS Fluig
Nova versão do JavaScript que foi lançada lá em 2015, e ela foi um grande marco porque ela trouxe uma série de evoluções e melhorias para a linguagem
- declaração de variáveis
```
let contador = 0;   //pode ser reatribuido
const PI = 3.14;    //não pode ser reatribuido
```
- Arrow function: funções mais curtas e sintaxe mais moderna
```
const soma = (a,b) => a + b;
```
- Template string: interpolar variáveis, quebrar linha
```
const nome = "Bruno";
console.log(`Olá, ${nome}! Seja bem-vindo.`);
```
- Destructuring: extração de valores de arrays e objetos
```
const usuario = { nome: "Bruno", idade: 30 };
const { nome, idade } = usuario; //extrai propriedades
```
- Spread e Rest operators: simplifica como copia dados de arrays e objetos
```
const numeros = [1,2,3];
const novoArray = [...numeros, 4, 5]; //spread

function soma(...valores) { //rest
    return valores.reduce( (a,b) => a + b );
}
```
- Default parameters: definir valores default para alguns parâmetros
```
function saudar(nome = "Visitante") {
    console.log("Olá, ${nome}!");
}
```
- Enhanced object literals: simplifica a sintaxe de um objeto
```
const nome = "Bruno";
const idade = 30;

const usuario = {
    nome,           // mesmo que nome: nome
    idade,          // mesmo que idade: idade
    saudacao() {    //sintaxe curta para métodos
        console.log("Olá, ${this.nome}!");
    }
};
```
- Strict mode: coloca o JS em um modo mais restrito de execução, ativando regras que ajudam a detectar comporamentos perigosos ou ambíguos no código. quando ativo, o JS impede algumas ações problemáticas e lança erros onde antes o código seria apenas ignorado silenciosamente
antes:
```
function exemplo() {
    x = 10;     //cria uma variável global sem declarar
    console.log(x);
}
exemplo();
```
agora:
```
'use strict';
function exemplo() {
    var x = 10; //agora é necessário declarar a variável
    console.log(x);
}
exemplo();
```

## jQuery
o jQuery era muito importante e ele era até mesmo indispensável no desenvolvimento frontend. Ele resolvia questões de manipulação do DOM, pequenas animações e até mesmo compatibilidade com navegadores. só que, atualmente, com o JavaScript moderno, a maioria dessas vantagens a gente não precisa necessariamente de jQuery. As APIs nativas do navegador elas já conseguem resolver, a gente tem APIs nativas para isso e a gente não precisa da dependência do jQuery para conseguir desenvolver as nossas soluções
quando a gente utiliza jQuery no nosso desenvolvimento, a gente acaba criando uma dependência de alguma coisa, o jQuery ele é uma biblioteca, então se a gente utiliza ele, a gente cria essa dependência dele. o mínimo de dependência que a gente tiver, a menor quantidade de dependência que a gente tiver com bibliotecas ou com qualquer outra coisa fora de um escopo nativo é muito bom para o nosso desenvolvimento, é muito bom para a manutenção a longo prazo do nosso código
Exemplo:
- selecionar elementos
```
logicajQuery() {
    //exemplo de texto
    $('.titulo').text('Bem-vindo!'); //aplica o texto na classe
    //com JS
    document.querySelector('.titulo').textContext = 'Bem-vindo!';

    //exemplo com classes
    $('.caixa', this.DOM).addClass('ativa');
    //com JS
    this.DOM.querySelector('.caixa').classList.add('ativa');

    //exemplo de cor
    $('.mensagem').css('color', 'red');
    //com JS
    this.DOM.querySelector('.mensagem').style.color = 'red';
    
    //varios estilos
    const el = this.DOM.querySelector('.mensagem');
    Object.assign(el.style, { color: 'red', backgroundColor: 'yellow' });

    //inserir varios elementos no DOM
    //jQuery
    $('.lista').append('<li>Novo item</li>');

    //JS
    this.DOM.querySelector('.lista')
        .insertAdjacentHTML('beforeend', '<li>Novo item</li>');
    
    //esconder e mostrar elementos
    //jQuery
    $('.caixa').hide();
    $('.caixa').show();

    //JS
    const caixa = document.querySelector('.caixa');
    caixa.style.display = 'none'; //esconder
    caixa.style.display = '';     //mostrar (ou 'block', conforme o caso)
}
```