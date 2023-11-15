// document.addEventListener('DOMContentLoaded', function() {
//     var links = document.querySelectorAll('nav ul li a');

//     links.forEach(function(link) {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();

//             var targetId = this.getAttribute('href').substring(1);
//             var targetElement = document.getElementById(targetId);

//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// });

window.onload = function() {
    // Hace scroll a la parte superior de la página al cargar
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', (e) => {
    const splash = document.querySelector('.splash');

    setTimeout(() => {
        // Añade la clase para desplazar hacia arriba
        splash.classList.add('slide-up');

        // Elimina el elemento después de que termine la animación de desplazamiento
        setTimeout(() => {
            splash.remove();
        }, 1000); // El mismo tiempo que la duración de la transición en el CSS
    }, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
    let innerCursor = document.querySelector(".inner-cursor");
    let outerCursor = document.querySelector(".outer-cursor");
    let textElement = document.querySelector(".custom-text");
    let contenidoDiv1 = document.getElementById("contenido1");

    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
        let x = e.clientX;
        let y = e.clientY;

        innerCursor.style.left = `${x}px`;
        innerCursor.style.top = `${y}px`;

        // Verificar si el cursor está sobre el área de "contenido"
        if (isCursorOverElement(e, contenidoDiv1)) {
            // Si el cursor está dentro del área de contenido, ocultar el custom-text
            textElement.style.display = "none";
            outerCursor.style.left = `${x}px`;
            outerCursor.style.top = `${y}px`;
            outerCursor.style.display = "block";
        } else {
            // Si el cursor está fuera del área de contenido, mostrar el custom-text
            textElement.style.display = "block";
            outerCursor.style.display = "none";

            // Ajustar la posición del texto con un retardo
            setTimeout(() => {
                const offset = 15; // Ajusta la distancia en píxeles por encima del cursor
                textElement.style.left = `${x}px`;
                textElement.style.top = `${y - offset}px`;
            }, 100);

            // Obtener el color del fondo en las coordenadas actuales del ratón
            var color = getPixelColor(e.clientX, e.clientY);
            var invertedColor = invertColor(color);

            // Aplicar el color invertido al texto
            textElement.style.color = '#' + invertedColor;
        }
    }

    // Listener para detectar cambios en el zoom
    window.addEventListener("resize", () => {
        adjustCursorSize();
    });

    // Llamada inicial para ajustar el tamaño del cursor
    adjustCursorSize();

    function adjustCursorSize() {
        // Ajusta el tamaño del cursor según la escala del zoom
        let zoomLevel = (document.body.clientWidth / window.innerWidth) * 100;
        let zoomLevelOuter = (document.body.clientWidth / window.innerWidth) * 40;
        let cursorSize = 46; // Tamaño base del cursor

        // Establece el tamaño del cursor utilizando una unidad relativa
        innerCursor.style.width = `${cursorSize / zoomLevel}vw`;
        innerCursor.style.height = `${cursorSize / zoomLevel}vw`;

        outerCursor.style.width = `${cursorSize / zoomLevelOuter}vw`;
        outerCursor.style.height = `${cursorSize / zoomLevelOuter}vw`;
    }

    // Función para obtener el color del fondo en las coordenadas dadas
    function getPixelColor(x, y) {
        var pixelData = document.createElement('canvas').getContext('2d').getImageData(x, y, 1, 1).data;
        return rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
    }

    // Función para invertir el color hexadecimal
    function invertColor(hex) {
        return (0xFFFFFF ^ parseInt(hex, 16)).toString(16).padStart(6, '0');
    }

    // Función para convertir RGB a hexadecimal
    function rgbToHex(r, g, b) {
        return ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
    }

    // Función para verificar si el cursor está sobre un elemento
    function isCursorOverElement(event, element) {
        const rect = element.getBoundingClientRect();
        return (
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
        );
    }
});
