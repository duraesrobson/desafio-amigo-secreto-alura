let amigos = [];


function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo == "") {
        alert("Digite um nome")
    } else{
        amigos.push(amigo);
        document.getElementById('amigo').value = ""
    }

    console.log(amigos);

}