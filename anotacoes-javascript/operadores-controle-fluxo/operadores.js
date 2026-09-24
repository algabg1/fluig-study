//atribuição

const nome = 'Carlos';

let pontos = 10;
pontos += 5; //15`

let saldo = 100;
saldo -= 20; //80

let quantidade = 4;
quantidade *= 2; //8

let valor = 20;
valor /= 4; //5

// comparação
console.log(10 == 10)       //true
console.log(10 != 5);       //true
console.log(20 > 10);       // true
console.log(5 < 10);        //true
console.log(12 <= 8);       //false
console.log(10 === 10);     //true
console.log(10 === '10');   //false
console.log(10 !== '10');   //true

//lógicos
const idade = 20;
const possuiCarteira = true;
console.log(idade >= 18 && possuiCarteira); //true

const possuiIngresso = false;
const nomeNaLista = true;
console.log(possuiIngresso || nomeNaLista); //true

const ativo = true;
console.log(!ativo); //false
