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

//escopo global
const nome = 'carlos';

function mostrarNome() {
    console.log(nome);
}

mostrarNome();

//escopo local
function cadastro() {
    const usuario = 'maria';
    console.log(usuario);
}

cadastro();

//escopo de bloco
const empresa = 'totvs'; //global

function exemplo () {
    const depto = 'tecnologia'; //local
    if (true) {
        const cargo = 'dev'; //bloco
        console.log(empresa);
        console.log(depto);
        console.log(cargo);
    }
}

exemplo();