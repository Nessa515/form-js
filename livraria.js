let inputTitulo = document.querySelector('#titulo');
let inputAutor = document.querySelector('#autor');
let inputAno = document.querySelector('#ano');
let btnAddLivro = document.querySelector('#btnAddLivro');
let conteudoTabela = document.querySelector("#conteudoTabela")

let livros = [];

function addLivro(titulo, autor, ano){
    let livro = {
        titulo: titulo,
        autor: autor,
        ano: ano
    }

    livros.push(livro);
}

btnAddLivro.addEventListener('click', function(e) {
    e.preventDefault()
    // console.log("OK... não recarregou!")
    addLivro(inputTitulo.value, inputAutor.value, inputAno.value);
    console.table(livros);
    limparFormulario()
    renderizarTabela()
})

function limparFormulario(){
    inputTitulo.value = ""
    inputAutor.value = ""
    inputAno.value = ""
    inputTitulo.focus()
}

function renderizarTabela(){
    conteudoTabela.innerHTML = `
        <table class='tabela'>
            <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Ano</th>
            </tr>
            ${livros.map(livro =>
                `<tr>
                    <td>${livro.titulo}</td>
                    <td>${livro.autor}</td>
                    <td>${livro.ano}</td>
                </tr>`
            ).join('')}
        </table>
    `
}