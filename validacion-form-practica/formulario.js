
document.getElementById("formulario").addEventListener('submit', (event) => {
    event.preventDefault();

    let entradaNombre = document.getElementById("name");
    let errorNombre = document.getElementById("nameError");

    if (entradaNombre.value.trim() === '' ) {
        errorNombre.textContent = 'Por favor, Introduce tu nombre';
        errorNombre.classList.add("error-message");
    }else{
        errorNombre.textContent = '';
        errorNombre.classList.remove("error-message");
    }

    let entradaEmail = document.getElementById("email");
    let errorEmail = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(entradaEmail.value)) {
        errorEmail.textContent = 'Por favor, Introduce tu Email';
        errorEmail.classList.add("error-message");
    }else{
        errorEmail.textContent = '';
        errorEmail.classList.remove("error-message");
    }

    let entradaPass = document.getElementById("password");
    let errorPass = document.getElementById("passwordError");

    if (entradaPass.value.trim() === '' ) {
        errorPass.textContent = 'Por favor, Introduce tu contraseña';
        errorPass.classList.add("error-message");
    }else{
        errorPass.textContent = '';
        errorPass.classList.remove("error-message");
    }

    if (!errorNombre.textContent && !errorEmail.textContent && !errorPass.textContent) {
        alert("Datos Enviados");
        document.getElementById("formulario").reset();
    }

});