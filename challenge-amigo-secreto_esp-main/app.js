// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarar una variable para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputNombre.value = "";

    // Llamar a la función para actualizar la lista de amigos
    actualizarLista();
}

// Función para recorrer el array amigos y mostrar los nombres en una lista
function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li>
        let item = document.createElement("li");
        item.textContent = amigos[i];

        // Agregar el elemento <li> a la lista
        lista.appendChild(item);
    }
}
