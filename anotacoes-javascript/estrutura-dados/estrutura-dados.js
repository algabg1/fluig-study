//objeto
const pessoa = {
    nome: 'maria',
    idade: 25,
    cidade: 'são paulo'
};

//acessando propriedades
console.log(pessoa.nome); // maria

//alterando propriedades
pessoa.idade = 26;
console.log(pessoa); // { nome: maria, idade: 26 }

//adicionando propriedades
pessoa.profissao = 'dev';
console.log(pessoa); // { nome: 'maria', profissao: 'dev' }

//array
//criando uma lista
const frutas = [
    'maça',
    'laranja',
    'banana'
];

//acessando um item
console.log(frutas[0]); // maça

//push
frutas.push('melancia');
console.log(frutas); // ['maça', 'laranja', 'banana', 'melancia']

//unshift
frutas.unshift('abacate');
console.log(frutas); //['abacate', 'maça', 'laranja', 'banana', 'melancia']

//spread
let fruta = ['laranja']
fruta = [...fruta, 'jabuticaba']
console.log(fruta); // ['laranja', 'jabuticaba']

//pop
frutas.pop()
console.log(frutas); // ['maça', 'laranja', 'banana']

//length
console.log(frutas.length); //3

//loops
//for
for (let i = 1; i <= 5; i++) {
    console.log(i);
} // 1 2 3 4 5 6

//while
let contador = 1;
while (contador <= 5) {
    console.log(contador);
    contador++;
} // 1 2 3 4 5

//for...of
const frutas1 = [
    'maça',
    'banana',
    'laranja'
];
for (const fruta1 of frutas1) {
    console.log(fruta1);
} // maça banana laranja

//foreach
const frutas2 = [
    'maça',
    'banana',
    'laranja'
];

frutas2.forEach(function (fruta2) {
    console.log(fruta2);
}); // maça banana laranja

//manipulação de strings
//length

const cNome = "js";
console.log(cNome.length) //2

//toUpperCase
console.log(cNome.toUpperCase()); //JS

//toLowerCase
console.log(cNome.toLowerCase()); //js

//trim
const texto = ' JavaScript ';
console.log(texto.trim());

//replace
texto = 'Olá, mundo';
console.log(texto.replace(
    'mundo',
    'JavaScript'
)); // Olá, JavaScript

//includes
const curso  = 'curso de js';
console.log(curso.includes("js")); //true

//split
const nomes = 'Ana,Carlos,Pedro';
console.log(nomes.split(',')); // ['Ana','Carlos','Pedro']

//template string
const nome = 'maria';
console.log('olá, ${nome}!'); // olá, maria

//numeros e booleanos
//number
console.log(Number('10')); // 10

//parseInt
console.log(parseInt('20.8')); // 20

//parseFloat
console.log(parseFloat('20.8')); // 20.8

//toFixed
const valor = 15.678;
console.log(valor.toFixed(2)); // 15.68

//Math.round
console.log(Math.round(8.6)); // 9

//Math.floor
console.log(Math.floor(8.9)); // 8

//Math.ceil
nomes = 'Ana,Carlos,Pedro';
console.log(nomes.split(',')); // ['Ana', 'Carlos', 'Pedro']

//Math.random
console.log(Math.random()); // 0.854...

//Boolean
console.log(Boolean(1)); // true