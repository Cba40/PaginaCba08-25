window.onload = function() {
    // Cargar el contenido de header.html
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la carga del header');
            }
            return response.text();
        })
        .then(data => {
            // Insertar el contenido del header en el contenedor
            document.getElementById('header-container').innerHTML = data;

            // Cargar el contenido de footer.html dentro del bloque then del header
            return fetch('footer.html');
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la carga del footer');
            }
            return response.text();
        })
        .then(data => {
            // Insertar el contenido del footer en el contenedor
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Hubo un problema con la carga:', error);
        });
};