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

////////////// Parte 2 Curso////////////////////////////

function arreglosEnJavaScript() {
    //Uso de arreglos, listas
    let arrayNumerico = [3, 4, 1, 2, 5];
    let arrayOrdenado = arrayNumerico.sort();
    console.log(arrayOrdenado);

    const array = new Array(5);
    array[0] = 'curso de html';
    array[1] = [1, 2, 3];
    array[2] = { nombre: 'claudio', edad: 24 };
    console.log(array);

    const arrayAcciones = ['Despertarse', 'Comer', 'Estudiar', 'Dormir'];
    let texto = '';
    for (let index = 0; index < arrayAcciones.length; index++) {
        texto += '<li>' + arrayAcciones[index] + '</li>';
    }
    //Agregar elemento <ul id="seleccionable"></ul> al html
    document.getElementById('seleccionable').innerHTML = texto;
}

function funcionesDeArreglos() {
    //Funciones de Arrays 
    //Funcion Filter
    const arrayFrutas = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja'];
    const resultado = arrayFrutas.filter(x => x == 'Manzana');
    console.log(resultado);

    const listaObjetos = [
        { nombre: 'claudio', edad: 24 },
        { nombre: 'luis', edad: 28 },
        { nombre: 'jose', edad: 19 },
        { nombre: 'rosa', edad: 50 },
        { nombre: 'ignacio', edad: 52 }
    ];
    const listaFiltrada = listaObjetos.filter((x) => x.edad > '30');
    console.log(listaFiltrada);

    //Funcion Map
    //arrayFrutas = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']
    const listaFrutas = arrayFrutas.map((x) => {
        if (x == 'Manzana') { return 'Kiwui' }
        else { return 'mango' }
    });
    console.log(listaFrutas);

    const listaObjetosMap = listaObjetos.map((x) => {
        if (x.edad <= 30) { return { nombre: x.nombre, estado: 'RAMOS A.' } }
        else { return { nombre: x.nombre, estado: 'NILO C.' } }
    });
    console.log(listaObjetosMap);

    //Funcion Fill
    const listaFill = arrayFrutas.fill('Pera', 3);
    console.log(listaFill);

    //Funcion Find 
    const fruta = arrayFrutas.find((x) => x == 'Pera');
    console.log(fruta);
    const objetoFind = listaObjetos.find((x) => (x.nombre == 'claudio'));
    const objetoFind_2 = listaObjetos.find((x) => {
        if (x.nombre == 'claudio') {
            return x;
        }
    });
    console.log(objetoFind_2);

    //Funcion FindIndex
    const frutasIndex = arrayFrutas.findIndex((x) => x == 'Banana');
    console.log(frutasIndex);

    //Funcion Some
    const frutasSome = arrayFrutas.some((x) => x == 'Pera');
    console.log(frutasSome);

    //Funcion Every
    const frutasEvery = arrayFrutas.every((x) => x == 'Pera');
    console.log(frutasEvery);

    const ultimaFruta = arrayFrutas.pop();//obtener y eliminar del arrary, ultimo elemento
    const primerFruta = arrayFrutas.shift();//obtener y eliminar del arrary, primer elemento
    arrayFrutas.push('Ciruela');//agregar elemento al final del array
    arrayFrutas.unshift('Uva');//agregar elemento al inicio del array

    let listaIngredientes = [
        { clave: 'manzana', precio: 10 },
        { clave: 'platano', precio: 12 },
        { clave: 'uva', precio: 15 },
        { clave: 'pera', precio: 13 },
    ];
    listaIngredientes.forEach((ingrediente) =>
        ingrediente.precio += 5
    );
    console.log(listaIngredientes);
}

function formatoFecha() {
    // Fecha(Date) en Js  YYYY-MM-DD
    const fecha = new Date();
    let dia = String(fecha.getDate()).padStart(2, '0');
    let mes = String(fecha.getMonth() + 1).padStart(2, '0');
    let anio = fecha.getFullYear();
    const fechaFormateada = anio + '-' + mes + '-' + dia;
    console.log(fechaFormateada);
}
