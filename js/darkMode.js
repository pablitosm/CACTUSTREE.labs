// Función para aplicar el tema oscuro
function applyDarkMode() {
    document.body.classList.add('dark');
    ceroImagen.classList.add('dark');
}

// Función para aplicar el tema claro
function applyLightMode() {
    document.body.classList.remove('dark');
    ceroImagen.classList.remove('dark');
}

// Verifica si el sistema operativo o el navegador tiene configurado el tema oscuro
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const ceroImagen = document.querySelector('.ceroImagen');
// Aplica el tema oscuro si es preferido por el sistema al cargar la página
if (prefersDarkMode.matches) {
    applyDarkMode();
}

// Agrega el evento de cambio de tema cuando cambia la preferencia de color del sistema
prefersDarkMode.addEventListener('change', (event) => {
    if (event.matches) {
        applyDarkMode();
    } else {
        applyLightMode();
    }
});