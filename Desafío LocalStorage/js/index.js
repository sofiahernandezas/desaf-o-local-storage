document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('buttonText').addEventListener('click', function() {
        const nuevoItem = document.getElementById('inputText').value;

        if (nuevoItem) {
            let listado = obtenerListado();
            listado.push(nuevoItem);
            guardarListado(listado);
        }
    });
});



// Función para obtener el listado del localStorage
function obtenerListado() {
    const listadoJSON = localStorage.getItem('listadoLocal');
    return listadoJSON ? JSON.parse(listadoJSON) : [];
}

// Función para guardar el listado en el localStorage
function guardarListado(listado) {
    localStorage.setItem('listadoLocal', JSON.stringify(listado));
}