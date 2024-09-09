document.addEventListener('DOMContentLoaded', function() {
    const listado = obtenerListado();
    const elementoData = document.getElementById('data');

    if (listado.length > 0) {
        elementoData.textContent = listado.join(', '); // Mostrar los items separados por comas
    } else {
        elementoData.textContent = 'No hay datos guardados';
    }
});

// Función para obtener el listado del localStorage
function obtenerListado() {
    const listadoJSON = localStorage.getItem('listadoLocal');
    return listadoJSON ? JSON.parse(listadoJSON) : [];
}