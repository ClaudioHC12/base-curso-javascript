const api_key = 'e74d5d171bfd1d06b0e3c84927408920';
const url = 'https://api.openweathermap.org';
let cityname = 'ramos arizpe';
const lang = 'sp';

document.getElementById("botonBusqueda").addEventListener('click', () => {
    cityname = document.getElementById("ciudadEntrada").value;
    if (cityname) {
        consumirApi(cityname);
    }
});

function consumirApi(ciudad) {
    fetch(`${url}/data/2.5/weather?q=${ciudad}&appid=${api_key}&units=metric&lang=${lang}`, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data); 
            mostrarDatosClima(data);
        })
        .catch(error => {
            window.alert("Error, Ingrese una ciudad valida 🚫");
        });
}

function mostrarDatosClima(datos) {
    let divDatosClima = document.getElementById("datosClima");
    divDatosClima.innerHTML = '';

    const ciudadNombre = datos.name;
    const temperatura = datos.main.temp;
    const descripcion = datos.weather[0].description;

    const elementoTitulo = document.createElement("h2");
    elementoTitulo.textContent = ciudadNombre + ', ' + datos.sys.country;

    const elementoTemp = document.createElement("p");
    elementoTemp.textContent = `Temperatura: ${temperatura}° C`;

    const elementoHum = document.createElement("p");
    elementoHum.textContent = `Humedad: ${datos.main.humidity}%`;

    const elementoDes = document.createElement("p");
    elementoDes.textContent = `Descripcion: ${descripcion}`;

    const icono = document.createElement("img");
    icono.src = `https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png`;

    divDatosClima.appendChild(elementoTitulo);
    divDatosClima.appendChild(icono);
    divDatosClima.appendChild(elementoTemp);
    divDatosClima.appendChild(elementoHum);
    divDatosClima.appendChild(elementoDes);
   
}








