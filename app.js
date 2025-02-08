const amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        document.getElementById('amigo').value = '';
        atualizarLista();
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
        
        // Esconder a lista de amigos
        document.getElementById('listaAmigos').style.display = 'none';
    }
}


