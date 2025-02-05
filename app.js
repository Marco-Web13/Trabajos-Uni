// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = document.getElementById("listaAmigos");
let nombreDeAmigo;
let listaDeAmigos = [];

console.log(isNaN(nombreDeAmigo));//String

function agregarAmigo(){    
    nombreDeAmigo = document.getElementById('amigo').value
    if(isNaN(nombreDeAmigo)){
        let li = document.createElement("li");
        let liText = document.createTextNode(nombreDeAmigo.value);
        li.appendChild(liText);
        lista.appendChild(li);

        listaDeAmigos.push(nombreDeAmigo);

        cambiarTextos('#listaAmigos', ""+listaDeAmigos);

        document.querySelector('#amigo').value = '';
    }
    else{
        alert("Inserta un nombre valido");
        document.querySelector('#amigo').value = '';
    }
}

function cambiarTextos(elemento, texto) {
    let cambiarHTML = document.querySelector(elemento);
    cambiarHTML.innerHTML = texto;
    return;
}

function sortearAmigo() {
    let numeroRandom = parseInt(Math.random()*listaDeAmigos.length);

    if(listaDeAmigos.length>0){
        cambiarTextos('#resultado', ""+listaDeAmigos[numeroRandom])
    }
    else{
        alert("Lista de amigos vacia");
    }
    //cambiarTextos('#resultado', ""+listaDeAmigos[numeroRandom])
}

const Nodo = {
    nodo: nodo,
    izquierda: izquierda,
    derecha: derecha
}

const Arbol = {
    
}