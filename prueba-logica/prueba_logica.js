//Se analiza una linea de texto con nombres, los nombres contienen 'si' o 'no'
//fueron aceptados de forma grupal al final de la linea,
//Requerimiento: Determinar que nombres 'si' o 'no' fueron aceptaods de forma individual.
let cadenas = [
    'claudio luis jose si',
    'claudio rosa jose no',
    'luis ignacio jose no'
];

determinarNombresAceptados(cadenas);

function determinarNombresAceptados(cadenas) {
    let mapa = new Map();
    for (let index = 0; index < cadenas.length; index++) {
        let linea = cadenas[index].split(' ');
        for (let i = 0; i < linea.length - 1; i++) {
            let clave = linea[i];
            let valor = linea[linea.length - 1];

            if (mapa.has(clave)) {
                if (mapa.get(clave) === 'no') {
                    mapa.set(clave, valor);
                }
            } else {
                mapa.set(clave, valor);
            }
        }
    }
    
    mapa.forEach((value, key, map) => {
        console.log(key, value);
    });
}

