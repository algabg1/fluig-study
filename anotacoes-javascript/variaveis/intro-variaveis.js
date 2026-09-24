const nome = 'Ana'; //não se atribui novo valor
const idade = 30
const matricula = true;
const cidade = null;

console.log('nome:', nome);
console.log('idade:', idade);
console.log('matricula:', matricula);
console.log('cidade:', cidade);

alert('alerta')

let nome1 = 'Ana'; //aceita atribuição de novos valores
console.log(nome1)
nome1 = 'Gabi';
console.log(nome1)

const disciplina = [
    "JavaScript",
    "HTML",
    "CSS"
];

const pessoa = {
    nome: 'Ana',
    idade: 26,
    matricula: true,
    cidade: null,
    aula: disciplina[0] 
}

console.log('Objeto pessoa:', pessoa)