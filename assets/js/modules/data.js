const especieSelect = document.getElementById('especie-animal');

// Función para cargar los animales del archivo JSON
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
async function rutaAnimal() {    
    const animales = await cargarDatos();
    const especie = especieSelect.value;
    return animales.find(animal => animal.especie === especie);
}

// Función para obtener la ruta de la imagen desde cargarDatos()
async function rutaImagen() {
    const animal = await rutaAnimal();
    return `./assets/imgs/${animal.imagen}`;
}

// Funcion para obtener la ruta del sonido desde cargarDatos()
async function rutaSonido() {
    const animal = await rutaAnimal();
    return `./assets/sounds/${animal.sonido}`;
}   

export default {rutaImagen, rutaSonido};

