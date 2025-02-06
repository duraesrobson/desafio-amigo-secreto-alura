let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo == ''){
        alert("Digite um nome");

    } else if(amigos.includes(amigo)) {
        alert("Esse nome já foi digitado");
    } else {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        atualizarListaAmigos();
    }

    console.log(amigos);
}


function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');

}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Sem nomes para sortear")
        return;
    }

    let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigoAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
    document.getElementById('amigo').value = '';

}