// comando para ejecutar JS en node :  node file_name.js




//Modificar html desde javascript y mensajes de consola
function modificarHtmlMensajes() {
    alert('Hola desde un alert!');
    console.log("Hola desde consola");

    var nombre = "Claudio"
    var edad = 18;
    var concatenacion = nombre + " ." + edad

    //Agregar div en html con id="datos"
    var datos = document.getElementById("datos") 
    datos.innerHTML = concatenacion
    datos.innerHTML = `
        <h1>soy la caja de datos</h1>
        <h1>${concatenacion}</h1>
    `;

    if (edad >= 18) {
        datos.innerHTML += '<h4>eres mayor de edad</h4>'
    } else {
        datos.innerHTML += '<h4>NO eres mayor de edad</h4>'
    }

    for (var a = 0; a < 10; ++a) {
        console.log(a)
        datos.innerHTML += '<p>año : ' + a + "</p>"
    }
    document.getElementById("datos").innerHTML = '🌏💻'
}

//Ejemplo variables
function usoDeVariables() {
    var a
    let b
    const c = 'inicio'

    let x = 5
    let y = x
    x = 3
    console.log(x, y);
}

//Operadores de Comparacion
function OperadoresComparacion() {
    let variable1 = 5
    let variable2 = '5'
    let resultado = (variable1 == variable2) //true
    resultado = (variable1 === variable2) // false
    resultado = (variable1 != variable2) // false
    resultado = (variable1 !== variable2) // true

    let m = (1 == 1 && 0 >= 1)
    console.log(w);
}

//ejemplo de Scope en javascript
function usoScope() {
    let e = 0
    {
        let e = 1
        console.log(e)
    }
    console.log(e);
}

//Ejemplo de asignacion de datos
function asignacionDatos() {
    //indefinido
    let r
    let y = null
    //fecha
    const fecha = new Date('2024-05-20')
    console.log(fecha);
}

//Parsear tipo de datos
function parsearTipoDatos() {
    let w = 5
    let r = '1'
    let f = w + parseInt(r)
    console.log(f);
}

//Implementacion de Funciones de Flecha
function funcionesFlecha() {
    let resultado = (num1, num2) => num1 + num2
    let resultado1 = (num1, num2) => { return num1 + num2 }
    console.log(resultado1(1, 2));
}

//Uso de objetos en javascript
function usoDeObjetos() {
    let auto1 = {
        marca: 'FIAT',
        modelo: 'UNO',
        peso: 1000,
        color: 'ROJO'
    }
    let auto2 = {
        marca: 'RENAULT',
        modelo: '12',
        peso: 1100,
        color: 'MARRON'
    }
    auto1.color = 'blanco'
    auto1['color'] = 'blanco'

    console.log('auto 1: ', auto1);
    console.log('auto 2: ', auto2);

    const vendedor = {
        nombre: 'claudio',
        apellido: 'hc',
        empresa: 'hc s.a.',
        habilidadesBlandas: ['carisma', 'puntualidad'],
        vender: function (cantidad) {
            return 'claudio ha vendido ' + cantidad + ' autos'
        },
        nombreCompleto: function () {
            return this.nombre + ' ' + this.apellido
        }
    }
    console.log(vendedor.vender(2));
}

//Uso de cadenas de texto
function cadenasDeTexto() {
    let texto = 'claudio'
    let resultado = texto.slice(2, 5);
    console.log(resultado);

    let frase = 'claudio hernandez'
    let array = frase.split(' ')
    console.log(array);
}

//Funcion que modifica en contenido de un elemento html con la fecha actual
function mostrarFecha() {
    //Agregar div en html con id="seleccionable"
    document.getElementById("seleccionable").innerHTML = Date()
}

//Funcion que retorna la suma de 2 numeros
function suma(x, y) {
    return x + y;
}

//Funcion que valida si una cadena de texto es un palindromo
function funcionValidarPalindromo() {
    const nombre = 'oso'
    let cadena = ''
    console.log(cadena);
    for (let index = nombre.length - 1; index >= 0; index--) {
        cadena += nombre[index]
    }
    if (nombre === cadena) {
        console.log("es palindromo");
    } else {
        console.log("no es palindromo")
    }
    console.log(nombre, cadena)
}