import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from './animal.js';

// Obtener el elemento select de especie
const especieSelect = document.getElementById('especie-animal');


// Función para cargar los datos del archivo JSON
async function cargarDatos() {
    try {
        const  response = await fetch('animales.json');
        const data = await response.json();
        return data.animales;

    } catch (error) {
        console.error('Error al cargar los datos del archivo JSON', error);
    }
}

// Función para obtener el animal de cargarDatos() según la especie seleccionada por el usuario
async function obtenerAnimal() {    
    const animales = await cargarDatos();
    const especie = especieSelect.value;
    return animales.find(animal => animal.especie === especie);
}


// Función para obtener la imagen del animal seleccionado desde cargarDatos()
async function obtenerImagen() {
    const animal = await obtenerAnimal();
    return `./assets/imgs/${animal.imagen}`;
}

// Funcion para obtener el sonido del animal seleccionado desde cargarDatos()
async function obtenerSonido() {
    const animal = await obtenerAnimal();
    return `./assets/sounds/${animal.sonido}`;
}   

// Evento change para el select de especie y mostrar imagen en preview
especieSelect.addEventListener('change', async () => {
    const img = document.getElementById('preview');
    img.src = await obtenerImagen();
});


// Función para instanciar el objeto animal seleccionado por el usuario
async function animalInstancia() {

    const especie = especieSelect.value;
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const imagen = await obtenerImagen();
    const comentarios = document.getElementById('comentarios').value;
    const sonido = await obtenerSonido();

    switch (especie) {
        case 'Leon':
            return new Leon(nombre, edad, imagen, comentarios, sonido);
        case 'Lobo':
            return new Lobo(nombre, edad, imagen, comentarios, sonido);
        case 'Oso':
            return new Oso(nombre, edad, imagen, comentarios, sonido);
        case 'Serpiente':
            return new Serpiente(nombre, edad, imagen, comentarios, sonido);
        case 'Aguila':
            return new Aguila(nombre, edad, imagen, comentarios, sonido);    
        default: 
            console.error('Especie no encontrada');
            return null;
    }
}


// Función para mostrar la tarjeta del animal seleccionado
async function mostrarTarjeta() {
    const animal = await animalInstancia();
    const card = animal.createCard();
    const animalContainer = document.getElementById('Animales');
    animalContainer.appendChild(card);
}

// Obtener el botón 'btnRegistrar' y agregar un evento de clic
const btnRegistrar = document.getElementById('btnRegistrar');
btnRegistrar.addEventListener('click', async () => {
    mostrarTarjeta();
});
