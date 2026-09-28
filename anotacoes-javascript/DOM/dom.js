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