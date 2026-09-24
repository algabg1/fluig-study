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