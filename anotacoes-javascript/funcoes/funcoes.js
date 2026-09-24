//declarando
function mostrarMensagem() {
    console.log('olá');
}

//chamando
mostrarMensagem();

//função com parametros
function apresentar(nome,idade) {
    console.log(nome);
    console.log(idade);
}

//argumentos
apresentar("carlos", 30);
// Carlos
// 30

//return
function somar(a,b) {
    return a + b;
}

somar(10, 5);
// 15

//declaration
function mostrar() {
    console.log('olá');
}

mostrar();

//expression
const mensagem = function () {
    console.log('olá');
};

mensagem();

//ou
const aparecerMensagem = function aparecer() {
    console.log('olá');
};

//anonima
const saudacao = function () {
    console.log('olá');
};

saudacao();

//arrow
const somar = (numero1, numero2) => {
    console.log(numero1 + numero2);
};

somar(10, 5);