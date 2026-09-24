//if
const idade1 = 20;

if (idade1 >= 18) {
    console.log('maior de idade');
} // maior de idade

//se falso
const idade2 = 15;

if (idade2 >= 18) {
    console.log('maior de idade');
} // nenhuma mensagem

//else
const idade3 = 16;

if (idade3 >= 18) {
    console.log('maior de idade');
} else {
    console.log('menor de idade');
} // menor de idade

// else if
const nota = 8;

if (nota >= 9) {
    console.log('excelente');
} else if (nota >= 7) {
    console.log('aprovado');
} else {
    console.log('reprovado');
} // aprovado

//switch
const dia = 3;

switch (dia) {
    case 1:
        console.log('domingo');
        break;
    case 2:
        console.log('segunda-feira');
        break;
    case 3:
        console.log('terça-feira');
        break;
    default:
        console.log('dia inválido');
} // terça-feira

//ternário
condicao ? 'resultado para true': 'resultado para false';
