/** 
import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";*/

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDXeOZtuiIqRyEGRWwfNZIVnKydQb_ZCSA",
    authDomain: "datos-formulario-usuario.firebaseapp.com",
    projectId: "datos-formulario-usuario",
    storageBucket: "datos-formulario-usuario.appspot.com",
    messagingSenderId: "199941938349",
    appId: "1:199941938349:web:1ca3a2b4e5f72ff0687a24",
    measurementId: "G-WE2ST38QJW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

/*const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/

//////////////////
document.getElementById("formulario").addEventListener('submit', (event) => {
    event.preventDefault();

    let entradaNombre = document.getElementById("name");
    let errorNombre = document.getElementById("nameError");

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, Introduce tu nombre';
        errorNombre.classList.add("error-message");
    } else {
        errorNombre.textContent = '';
        errorNombre.classList.remove("error-message");
    }

    let entradaEmail = document.getElementById("email");
    let errorEmail = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(entradaEmail.value)) {
        errorEmail.textContent = 'Por favor, Introduce tu Email';
        errorEmail.classList.add("error-message");
    } else {
        errorEmail.textContent = '';
        errorEmail.classList.remove("error-message");
    }

    let entradaPass = document.getElementById("password");
    let errorPass = document.getElementById("passwordError");

    if (entradaPass.value.trim() === '') {
        errorPass.textContent = 'Por favor, Introduce tu contraseña';
        errorPass.classList.add("error-message");
    } else {
        errorPass.textContent = '';
        errorPass.classList.remove("error-message");
    }

    if (!errorNombre.textContent && !errorEmail.textContent && !errorPass.textContent) {

        db.collection("users").add({
            name: entradaNombre.value,
            email: entradaEmail.value,
            password: entradaPass.value
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

        document.getElementById("formulario").reset();
        alert("Datos Enviados");
    }

});



