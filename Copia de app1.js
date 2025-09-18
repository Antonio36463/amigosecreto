// Arreglo para almacenar los nombres de amigos
let amigos = [];

// Agrega un amigo 
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); // Obtener el valor del input

    // Valida que el campo no esté vacío y que no sea un número
    if (nombreAmigo === "" || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreAmigo)) {
        alert("Por favor, inserte un nombre válido (solo letras)");
        return; // Detiene la ejecución de la función 
    } 

    // Valida que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya está en la lista`);
        return;
    }

    // Agrega el nombre al arreglo de amigos
    amigos.push(nombreAmigo);

    // Limpia el campo de entrada
    inputAmigo.value = "";

    // Actualiza la lista en el HTML
    actualizarLista();
}

// Actualiza la lista de amigos en la interfaz 
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpia el contenido actual de la lista 
    listaAmigos.innerHTML = ""; // Borra cualquier contenido previo dentro del contenedor de la lista 

    // Agrega cada amigo a la lista
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo; // Añadir el nombre a la lista
        listaAmigos.appendChild(li); // Añadir el nuevo elemento a la lista
    });
}

// Muestra los amigos
function mostrarAmigos() {
    for (let i = 0; i < amigos.length; i++) {
        console.log(amigos[i]); // Imprimir en la consola
    }
}

// Selecciona un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    alert(`Tu amigo secreto es: ${amigoAleatorio}`);
}
