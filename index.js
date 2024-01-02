
    // document.addEventListener('DOMContentLoaded', function() {
    //     var loader = document.getElementById("preloader");
    //     var introShown = document.cookie.indexOf('introShown=true') !== -1;

    //     if (!introShown) {
    //         loader.classList.remove('hide');
    //         setTimeout(function() {
    //             loader.classList.add('hide');
    //             document.cookie = 'introShown=true';
    //         }, 1);
    //     } else {
    //         loader.classList.add('hide');
    //     }
    // });

    document.addEventListener("DOMContentLoaded", function () {
        let innerCursor = document.querySelector(".inner-cursor");
        let textElement = document.querySelector(".custom-text");
        let terceraImagenDiv = document.getElementById("projects"); // Usamos el ID del div


        document.addEventListener("mousemove", moveCursor);

        function moveCursor(e) {
            let x = e.clientX;
            let y = e.clientY;
    
            innerCursor.style.left = `${x}px`;
            innerCursor.style.top = `${y}px`;
    
            // Verificar si el cursor está sobre el área de "terceraImagen"
            if (isCursorOverElement(e, terceraImagenDiv)) {
                // Si el cursor está dentro del área de "terceraImagen", mostrar el custom-text
                textElement.style.display = "block";
    
                // Puedes cambiar el texto dependiendo de tus necesidades
                textElement.innerText = "Proyectos";
    
                // Ajustar la posición del texto con un retardo
                setTimeout(() => {
                    const offset = 15; // Ajusta la distancia en píxeles por encima del cursor
                    textElement.style.left = `${x}px`;
                    textElement.style.top = `${y - offset}px`;
                }, 100);
            } else {
                // Si el cursor está fuera del área de "terceraImagen", ocultar el custom-text
                textElement.style.display = "none";
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
            let cursorSize = 46; // Tamaño base del cursor

            // Establece el tamaño del cursor utilizando una unidad relativa
            innerCursor.style.width = `${cursorSize / zoomLevel}vw`;
            innerCursor.style.height = `${cursorSize / zoomLevel}vw`;
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

    document.addEventListener("DOMContentLoaded", function () {
        var menuItems = document.querySelectorAll(".navbar a");

        function updateActiveMenuItem() {
            var scrollPosition = window.scrollY;

            menuItems.forEach(function (menuItem) {
                var targetId = menuItem.getAttribute("href").substring(1);
                var targetSection = document.getElementById(targetId);

                if (
                    targetSection.offsetTop <= scrollPosition &&
                    targetSection.offsetTop + targetSection.offsetHeight > scrollPosition
                ) {
                    // Agregar la clase 'active' al elemento del menú correspondiente
                    menuItem.parentElement.classList.add("active", "fadeIn");
                    menuItem.classList.add("active"); // Agregar la clase 'active' al enlace
                } else {
                    // Remover la clase 'active' si la sección ya no está visible
                    menuItem.parentElement.classList.remove("active", "fadeIn");
                    menuItem.classList.remove("active"); // Remover la clase 'active' del enlace
                }
            });
        }

        window.addEventListener("scroll", updateActiveMenuItem);
        window.addEventListener("load", updateActiveMenuItem);

        // Para solucionar el problema de Contacto
        // Agregamos un evento al hacer clic en el enlace para desplazar suavemente a la sección
        menuItems.forEach(function (menuItem) {
            menuItem.addEventListener("click", function (event) {
                event.preventDefault();
                var targetId = menuItem.getAttribute("href").substring(1);
                var targetSection = document.getElementById(targetId);

                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            });
        });
    });
