// Quando clicar no botão sorteado, serão sorteados pares de amigos,
// onde um dá um presente e o outro recebe
// Quando clicar em reinicar, tudo será zerado.

let listaAmigos = [];
let listaPares = [];

function adicionar(){
    let campoNome = document.getElementById('nome-amigo');
    let campoAmigos = document.getElementById('lista-amigos');
    
    if (campoNome.value == ''){
        alert('Insira o nome de alguém antes de adicionar');
    } else if (listaAmigos.includes(campoNome.value)) {
        alert('Essa pessoa já foi adicionada a lista')
    } else{
        listaAmigos.push(campoNome.value);
        campoAmigos.innerText = `${listaAmigos}`;
        campoNome.value = '';
    }
}

function sortear(){
    if (listaAmigos.length >= 4){
        embaralha(listaAmigos);
        let listaSorteio = document.getElementById('lista-sorteio');
        for (let i = 0; i < listaAmigos.length; i++){
            if (i == listaAmigos.length - 1){
                listaSorteio.innerHTML = listaSorteio.innerHTML +  listaAmigos[i] + ' --> ' + listaAmigos[0] + '<br>';
            } else {
                listaSorteio.innerHTML = listaSorteio.innerHTML +  listaAmigos[i] + ' --> ' + listaAmigos[i+1] + '<br>';
            } 
        }
    } else if (listaAmigos.length < 4){
        alert('Você não pode sortear a lista com menos de quatro pessoas.');
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