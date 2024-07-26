let nota = document.querySelector('#nota');
let btnCadastrar = document.querySelector('#btnCadastrar');
let nome = "Maria da Silva";
let idade = 24;
let usuarioAtivo = true;

console.log(`Nome: ${nome}`);
console.log(`A idade de ${idade}`);
console.log(`Usuário ativo: ${usuarioAtivo}`);

btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault();
    alert(verificarMedia(nota.value));
});

function verificarMedia(nota){
    if(nota >= 60) {
        return "Estudante aprovado!"
    } else {
        return "Estudante reprovado!"
    }
}

// let: escopo local
// var: escopo global

// <script>
// document.querySelector
// Arrow Function
// Template String
// preventDefault
// alert,console.log

// Constantes
const PI = 3.1415;
idade = 20;

// let ehMaior = idade >= 18 ? true : false
let ehMaior = idade >= 18 ? 'É maior de idade' : 'É menor de idade'

console.log(ehMaior);

let frutas = ["maça", "pera", "uva"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas.length);
frutas[0] = "banana";
console.log(frutas[0]);
console.log(typeof(frutas));

// Objetos
let livro = {
    titulo: "2001: Uma odisséia no espaço",
    autor: 'Arthur C. Clarke',
    ano: 1968
}

console.table(livro)