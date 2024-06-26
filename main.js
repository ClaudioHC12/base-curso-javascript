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

function condicionales() {
    //Condicionales
    let edadPersona = 24;
    if (edadPersona >= 18 && edadPersona <= 60) {
        console.log('Puedes ingresar a la plaza FSA');
    } else if (edadPersona < 18) {
        console.log('No puedes ingresar, eres menor de edad');
    } else {
        console.log('No se recomienda ingresar');
    }

    let fecha = new Date();
    switch (fecha.getDay()) {
        case 1:
            console.log('Lunes');
            break;
        case 2:
            console.log('Martes');
            break;
        case 3:
            console.log('Miercoles');
            break;
        case 4:
            console.log('Jueves');
            break;
        case 5:
            console.log('Viernes');
            break;
        case 6:
            console.log('Sabado');
            break;
        case 2:
            console.log('Domingo');
            break;
        default:
            console.log('Ingrese un dia valido');
            break;
    }

    //operador ternario
    let resultado = (fecha.getFullYear() >= 2000) ? 'milenial' : 'X-men';
    console.log(resultado);
}

function buclesJS() {
    //Bucles
    //Agregar elemento <select name="drop" id="select"></select>
    let comboBox = document.getElementById('select');
    let arreglo = ['Angular', 'React', 'Vue'];
    for (let index = 0; index < arreglo.length; index++) {
        comboBox.innerHTML += `<option value="${arreglo[index]}">${arreglo[index]}</option>`;
    }

    for (const iterator of arreglo) {
        //console.log(iterator);
    }

    let objeto = { nombre: 'claudio', edad: 24 };
    for (const key in objeto) {
        //console.log(objeto[key]);;
    }

    let arrayNumeros = [1, 2, 3, 4, 5];
    let total = 0;
    arrayNumeros.forEach(element => {
        total += element;
    });
    //console.log(total);

    let numeroIncremento = 0;
    while (numeroIncremento < 10) {
        numeroIncremento++;
        if ((numeroIncremento % 2) == 0) {
            continue;
        }
        //console.log(numeroIncremento);
    }

    let cadena = 'claudio';
    let indice = 0;
    do {
        if (cadena == undefined || cadena == null || cadena.length == 0) break;
        console.log(cadena[indice]);
        indice++;
    } while (indice < cadena.length);
}

function listasTipoSetyMap() {
    //Set y Maps
    let listaSet = new Set(['claudio', 'luis', 'jose', 'jose']);
    listaSet.add('rosa');
    //console.log(listaSet);

    let mapa = new Map([
        ['laptop', 10],
        ['pc', 15],
        ['iphone', 20]
    ]);
    mapa.set('smart watch', 13);
    let elemento = mapa.has('smart watch');
    console.log(mapa);
    console.log(elemento);
}

function verificarTiposDatos() {
    //TypeOf y InstanceOf  (verificar tipo de datos)
    let a = typeof 'aaa';
    let b = typeof 1;
    let c = typeof [];
    console.log(c);

    let d = [];
    let e = d instanceof Array;
    console.log(e);
}

function conversionesTiposDatos() {
    //conversiones tipos de datos
    let a = parseInt('2.3');
    let b = a.toString();
    let c = Boolean(0);
    console.log(c);

    let num = 1;
    if (num) {// null, undefined, 0, '' = false   ...-1,1...,' ' = true
        console.log('si');
    }
}

function expresionesRegulares() {
    //Regex: Expresiones regulares
    let texto = 'curso de Javascript en tiempo record';
    let busqueda = texto.search(/javascript/i);
    console.log(busqueda);

    /*
    Modificadores
        i: Ignorar mayusculas y minusculas
        g: Buscar en todo el texto pasado
        m: Busqueda multinea
     */

    let pattern = /Tiempo/i;
    let resultado = pattern.test(texto);
    resultado = pattern.exec(texto);
    console.log(resultado);

    let patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(patternEmail.test('claudio12@gmail.com'));
}

function manejoErroresJS() {
    //Manejo de Errores
    try {
        console.log('llamando al Backend...');
        throw ('403-Not authorized');//Lanzar Excepcion
        console.log('!Se realizó con exito Exito');
    } catch (error) {
        console.log('Algo salió mal:', error);
    } finally {
        console.log('Finalizado');
    }
}

function Callbacks() {
    // Callbacks
    function mostrarConsola(num) {
        console.log(num);
    }
    //se pasa una funcion como parametro
    function calcular(num1, num2, callback) {
        let suma = num1 + num2;
        callback(suma);
    }
    calcular(1, 2, mostrarConsola);
}

function promesas() {
    //Promesas
    let promesa = new Promise((response, reject) => {
        setTimeout(() => {
            let apiResponse = {
                data: {
                    id: 1,
                    user: 'claudiohc'
                },
                statusCode: '200-OK'
            }
            response(apiResponse);
            //reject({ message: 'Server Error', code: '505' });
        }, 5000);

    });
    console.log('ejecutando promesa en paralelo');
    promesa.then((res) => {
        console.log(res);
    }).catch((error) => {
        console.error(error);
    });
    console.log('procesando UI');
}

function ejecucionAsyncrona() {
    //Async/await
    let promesa1 = new Promise((response) => {
        setTimeout(() => {
            response('Promesa 1 procesada');
        }, 2500);
    });
    let promesa2 = new Promise((response) => {
        setTimeout(() => {
            response('Promesa 2 procesada');
        }, 1000);
    });

    async function ejecutarPromesas() {
        let respPromesa1 = await promesa1;
        console.log(respPromesa1);
        let respPromesa2 = await promesa2;
        console.log(respPromesa2);
    }
    ejecutarPromesas()
}

//Fetch, APIs y JSON
const url = 'https://jsonplaceholder.typicode.com';

let query = 'todos';
//GET
fetch(`${url}/${query}`)
      .then(response => response.json())
      .then(json => console.log(json));

//POST
let requestBody = {title: 'Mexico hay hay', body: 'larala larala', userId: 1};
fetch(`${url}/posts`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify(requestBody)
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//PUT
let requestBody2 = {title: 'Mexico lindo', body: 'ajua', userId: 1, id:101};
fetch(`${url}/posts/1`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify(requestBody2)
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//PATCH
let modificacion = {title: 'Mexico lindo'};
fetch(`${url}/posts/2`, {
  method: 'PATCH',
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify(modificacion)
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//DELETE
const elemento = 3;
fetch(`${url}/posts/${elemento}`, {
  method: 'DELETE',
});