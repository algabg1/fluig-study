//getElementById

/*
<h1 id="titulo1">Curso de JS</h1>
*/

const titulo1 = document.getElementById('titulo');
console.log(titulo); // <h1 id="titulo">Curso de JS</h1>

//querySelector

/*
<h1 id="titulo2">DEV Start JavaScript</h1>
<h2> JavaScript </h2>
<p class="descricao">Aprendendo DOM</p>
<button data-click> clique aqui </button>
*/

const titulo2 = document.querySelector("#titulo2"); // usa # para id
const subtitulo = document.querySelector("h2");
const descricao = document.querySelector(".descricao"); // usa . para classe
const btn = document.querySelector("[data-click]"); // usa [] para atributos dataset

//querySelectorAll

/*
<p>HTML</p>
<p>CSS</p>
<p>JS</p>
*/

const paragrafos1 = document.querySelectorAll("p");
console.log(paragrafos1); //NodeList(3) lista de elementos HTML retornada pelo DOM, não é uma array, indica a quantidade de elementos

const paragrafos2 = document.querySelectorAll("p");
console.log(paragrafos2[0]); // <p>HTML</p> retorna apenas o elemento, acessando pelo índice

// textContent

/*
<h1 id="titulo3"> DEV Start JS </h1>
*/

const titulo3 = document.querySelector("#titulo3");
console.log(titulo3.textContent); // DEV Start JS

titulo3.textContent = "Curso de DOM"; // Curso de DOM

//innerHTML

/*
<div id="mensagem"></div>
*/

const mensagem = document.getElementById("mensagem");
mensagem.innerHTML = "<strong>Bem-vindo!</strong>"; // Bem-vindo!

//value

/*
<input id="nome" value="maria">
*/

const campo = document.getElementById("nome");
console.log(campo.value); //lê o valor: maria

campo.value = "carlos"; //altera o valor: carlos

//classList

/*
<p id="texto4">Olá</p>
*/

//add
const texto4 = document.getElementById("texto");
texto4.classList.add("ativo"); //<p class="ativo">Olá</p>

//remove()
texto4.classList.remove("ativo"); // <p class="">Olá</p>

//toggle
texto4.classList.toggle("ativo"); //<p class="ativo">Olá</p>

//contains
console.log(texto4.classList.contains("ativo")); //true

//style

/*
<p id="mensagem1">Olá</p>
*/

const mensagem1 = document.getElementById("mensagem1");
mensagem1.style.color("blue"); // a cor do texto ficará azul
mensagem1.style.fontSize = "24px"; // o tamanho da fonte será alterado para 24px

//setAttribute

/*
<img id="foto">
*/
const foto = document.getElementById("foto");
foto.setAttribute("src", "imagem.jpg"); // <img src="imagem.jpg">

//getAttribute

/*
<a id="link" href="https://www.google.com">Google</a>
*/

const link = document.getElementById("link");
console.log(link.getAttribute("href")); //https://www.gooogle.com

//addEventListener

//click
/*
<button id="btnSalvar"> Salvar </button>
*/

const botao = document.getElementById("btnSalvar");
botao.addEventListener("click", function(){
    console.log("botão clicado");
}); // sempre que o botão for clicado, a mensagem aparecerá no console

//input

/*
<input id="nome" type="text">
*/

const campo = document.getElementById("nome");
campo.addEventListener("input", function(){
    console.log(campo.value);
}); //sempre que uma letra for digitada, o console exibirá o valor atual do campo

//change

/*
<select id="estado">
    <option>São Paulo</option>
    <option>Rio de Janeiro</option>
    <option>Minas Gerais</option>
</select>
*/

const estado = document.getElementById("estado");
estado.addEventListener("change", function() {
    console.log(estado.value);
}); // sempre que o usuário selecionar outra opção, o valor será exibido no console

//formulários

/*
<form id="contato"></form>
<form id="cadastro"></form>
*/

console.log(document.forms);

/*
<form name="contato"></form>
*/

const formulario = document.forms.contato;
console.log(formulario); // <form name="contato">

/*
<form name="contato">
    input type="text" name="nome">
</form>
*/

const campo = document.forms.contato.nome;
console.log(campo); // <input name="nome">

/*
<form name="contato">
    <input type="text" name="nome" value="maria"
</form>
*/

console.log(document.contato.nome.value); // maria

//submit

/*
<form name="contato">
    <input type="text" name="nome">
    <button Type="submit"> Enviar </button>
</form>
*/

const formulario1 = document.forms.contato;
formulario1.addEventListener("submit", function() {
    console.log("formulário enviado");
}); // sempre que o formulário for enviado, essa função será executada


//preventDefault

const formulario2 = document.forms.contato;
formulario2.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("formulário enviado sem recerregar a página");
}); // sempre que o formulário for enviado, essa função será executada, mas a página não será recarregada

//dataset

/*
<button id="produto" data-id="10" data-nome="notebook"> Comprar </button>
*/

const produto = document.getElementById("produto");
console.log(produto.dataset.id); // 10
console.log(produto.dataset.nome); // notebook

//temporizadores
//setTimeout

setTimeout(function() {
    console.log("olá");
}, 2000); // a mensagem será exibida no console após 2 segundos

//setInterval

setInterval(function() {
    console.log("executando...");
}, 2000); // a mensagem será exibida no console a cada 2 segundos

//date
//new Date()

const hoje = new Date();
console.log(hoje); // exibe a data e hora atual Tue Jul 14 2026 10:30:15

//getDate()
hoje = new Date();
console.log(hoje.getDate()); // exibe o dia do mês atual 14

//getMonth()
hoje = new Date();
console.log(hoje.getMonth()); // exibe o mês atual (0-11) 6

//getFullYear()
hoje = new Date();
console.log(hoje.getFullYear()); // exibe o ano atual 2026

//gethours()
hoje = new Date();
console.log(hoje.getHours()); // exibe a hora atual 10

//getMinutes()
hoje = new Date();
console.log(hoje.getMinutes()); // exibe os minutos atuais 30

