//Numero random entre 1 y 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let cantidadIntento = 0;

function validarResultado() {
    cantidadIntento++;
    intento.textContent = cantidadIntento;
    let numeroIngresado = parseInt(numeroEntrada.value);
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Introduce un numero Valido ❌';
        mensaje.style.color = 'red';
        return;
    }
    
    if (numeroIngresado === numeroAleatorio) {
        mensaje.textContent = '¡Felicidades, has adivinado 😎!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if (numeroIngresado < numeroAleatorio) {
        mensaje.textContent = 'el numero es mayor ⏫';
        mensaje.style.color = '#36CCC3';
    }else{
        mensaje.textContent = 'el numero es menor ⏬';
        mensaje.style.color = '#36CCC3';
    }
}