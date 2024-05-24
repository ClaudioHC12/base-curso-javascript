import { barcelona, roma, paris, londres } from "./ciudades.js";

//Obtener elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

//Agregar evento click a cada enlace
enlaces.forEach( function (enlace) {
    enlace.addEventListener('click', function(){
        enlaces.forEach( function (enlace) {
            enlace.classList.remove('active');
        });

        this.classList.add('active');
        let ciudad = obtenerContenido(this.textContent);
        tituloElemento.innerHTML = ciudad.titulo;
        subTituloElemento.innerHTML = ciudad.subtitulo;
        parrafoElemento.innerHTML = ciudad.parrafo;
        precioElemento.innerHTML = 'Precio: $'+ ciudad.precio + ' USD';
    });
}

);

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona' : barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres
    };
    return contenido[enlace];
}

console.log(enlaces)