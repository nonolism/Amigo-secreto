// Quando clicar no botão sorteado, serão sorteados pares de amigos,
// onde um dá um presente e o outro recebe
// Quando clicar em reinicar, tudo será zerado.

let listaAmigos = [];

function adicionar(){
    let campoNome = document.getElementById('nome-amigo');
    let nome = campoNome.value;
    let campoAmigos = document.getElementById('lista-amigos');
    
    if (nome != ''){
        listaAmigos.push(` ${nome}`)
        campoAmigos.innerText = `${listaAmigos}`;
    } else {
        alert('Insira o nome de alguém antes de adicionar');
    }
}

function sortear(){

}

function reinicar(){

}