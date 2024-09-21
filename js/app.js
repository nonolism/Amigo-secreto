// Quando clicar no botão sorteado, serão sorteados pares de amigos,
// onde um dá um presente e o outro recebe
// Quando clicar em reinicar, tudo será zerado.

let listaAmigos = [];
let listaPares = [];

function adicionar(){
    let campoNome = document.getElementById('nome-amigo');
    let campoAmigos = document.getElementById('lista-amigos');
    
    if (campoNome.value != ''){
        listaAmigos.push(campoNome.value);
        campoAmigos.innerText = `${listaAmigos}`;
        campoNome.value = '';
    } else {
        alert('Insira o nome de alguém antes de adicionar');
    }
}

function sortear(){
    if (listaAmigos.length > 1){
        embaralha(listaAmigos);
        let listaSorteio = document.getElementById('lista-sorteio');
        for (let i = 0; i < listaAmigos.length; i++){
            if (i == listaAmigos.length - 1){
                listaSorteio.innerHTML = listaSorteio.innerHTML +  listaAmigos[i] + ' --> ' + listaAmigos[0] + '<br>';
            } else {
                listaSorteio.innerHTML = listaSorteio.innerHTML +  listaAmigos[i] + ' --> ' + listaAmigos[i+1] + '<br>';
            } 
        }
    } else if (listaAmigos.length == 1){
        alert('Você não pode sortear a lista com apenas uma pessoa.');
    } else{
        alert('Você não pode sortear com a lista vazia.');
    }
}

function embaralha(lista) {
    let indice = lista.length;
    while(indice) {
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}

function reinicar(){

}