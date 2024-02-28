import { Leon, Lobo, Oso, Serpiente, Aguila } from './modules/especie.js';
import data from './modules/data.js';

// Obtener el elemento select de especie
const especieSelect = document.getElementById('especie-animal');

// Mostrar imagen en preview mediante el evento change del select
especieSelect.addEventListener('change', async () => {
    const img = document.getElementById('preview');
    img.src = await data.rutaImagen();
});

// Función para instanciar el objeto animal seleccionado por el usuario
async function animalInstancia() {

    const especie = especieSelect.value;
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const imagen = await data.rutaImagen();
    const comentarios = document.getElementById('comentarios').value;
    const sonido = await data.rutaSonido();

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

// Función para añadir la tarjeta del animal al contenedor
async function añadirTarjeta() {
    const animal = await animalInstancia();
    const card = animal.createCard();
    const animalContainer = document.getElementById('Animales');
    animalContainer.appendChild(card);
}

// Evento submit del formulario para añadirTarjeta()
const form = document.getElementById('animal-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
        await añadirTarjeta();
        form.reset(); 
    }
);

// Función para actualizar el contenido de la modal con los datos de la tarjeta
function actualizarModal(imagen, edad, comentario) {
    const modalBody = document.querySelector('#modal-container .modal-body');

    modalBody.innerHTML = `
        <img src="${imagen}" class="img-fluid" alt="Animal">
        <p>Edad: ${edad}</p>
        <p>Comentario: ${comentario}</p>
    `;
    $('#modal-container').modal('show');
}

// Evento click en la imagen de la tarjeta para actualizar la modal
document.addEventListener('click', (event) => {
    if (event.target.matches('.card img')) {
        const imagen = event.target.src;
        const edad = event.target.parentElement.getAttribute('data-age');
        const comentario = event.target.parentElement.getAttribute('data-comment');
        actualizarModal(imagen, edad, comentario);
    }
});


