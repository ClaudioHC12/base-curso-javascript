document.getElementById("searchButton").addEventListener('click', buscarPeliculas);
const api_key = 'f5dbecd9ba8fef53b79013c3a6eaae6f';
const url = 'https://api.themoviedb.org';
// URI: 'https://api.themoviedb.org/3/search/movie?query={Jack+Reacher}&api_key={}'
const imgUrl = 'https://image.tmdb.org/t/p/w500/';

function buscarPeliculas() {
    let busqueda = document.getElementById("searchInput").value;

    fetch(`${url}/3/search/movie?language=es-MX&&query=${busqueda}&api_key=${api_key}`, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            mostrarPeliculas(data.results);
        })
        .catch(error => {
            window.alert("¡Ocurrio un error!🚫");
        });
}

function mostrarPeliculas(data) {
    let resultadosPeliculas = document.getElementById("results");
    resultadosPeliculas.innerHTML = '';

    if (data.length === 0) {
        resultadosPeliculas.innerHTML = '<p class="asd">!Sin resultados 🦝¡</p>';
        return;
    }
    data.forEach(element => {
        let movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        let tittle = document.createElement('h2');
        tittle.textContent = element.title;

        let releaseDate = document.createElement('p');
        releaseDate.textContent = 'Fecha de lanzamiento: ' + element.release_date;

        let overView = document.createElement('p');
        overView.textContent = element.overview;

        let poster = document.createElement('img');
        poster.src = imgUrl + element.poster_path;

        movieDiv.appendChild(poster);
        movieDiv.appendChild(tittle);
        movieDiv.appendChild(releaseDate);
        movieDiv.appendChild(overView);

        resultadosPeliculas.appendChild(movieDiv);
    });
}


function autenticacionToken() {
    const url = 'https://api.themoviedb.org/3/movie/11';
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWRiZWNkOWJhOGZlZjUzYjc5MDEzYzNhNmVhYWU2ZiIsInN1YiI6IjY2NTIyNTQwMGIxNDJjMWUzZDdmMzc0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IOzduIeRoZnjY4vwZ2QsogwMcCjjl85BSTdTjSLNAwU';

    fetch(url, {
        method: 'GET', // o 'POST', 'PUT', etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud fetch:', error);
        });
}