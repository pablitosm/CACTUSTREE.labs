document.addEventListener("DOMContentLoaded", function () {

    let innerCursor = document.querySelector(".inner-cursor");
    let outerCursor = document.querySelector(".outer-cursor");
    let textElement = document.querySelector(".custom-text");

    let proyectoUno = document.getElementById("projects1");
    let proyectoDos = document.getElementById("projects2");
    let proyectoTres = document.getElementById("projects3");

    let quintaImagen = document.getElementById("art");

    let momentoUno = document.getElementById("moment1");
    let momentoDos = document.getElementById("moment2");
    let momentoTres = document.getElementById("moment3");

    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
        let x = e.clientX;
        let y = e.clientY;

        innerCursor.style.left = `${x}px`;
        innerCursor.style.top = `${y}px`;
    
        document.querySelectorAll("a").forEach(link => {
            link.addEventListener("mouseover", function() {
                outerCursor.style.display = "block";
            });
    
            link.addEventListener("mouseout", function() {
                outerCursor.style.display = "none";
            });
        });
    
        // Actualizar la posición del outerCursor continuamente
        if (outerCursor.style.display === "block") {
            setTimeout(() => {
                outerCursor.style.left = `${x}px`;
                outerCursor.style.top = `${y}px`;
            }, 200);
        }

        // Verificar si el cursor está sobre el área de "terceraImagen"
        if (isCursorOverElement(e, proyectoUno)) {
            // Si el cursor está dentro del área de "terceraImagen", mostrar el custom-text
            textElement.style.display = "block";

            // Puedes cambiar el texto dependiendo de tus necesidades
            textElement.innerText = "intro";

            // Ajustar la posición del texto con un retardo
            setTimeout(() => {
                const offset = 15; // Ajusta la distancia en píxeles por encima del cursor
                textElement.style.left = `${x}px`;
                textElement.style.top = `${y - offset}px`;
            }, 100);
        } else if (isCursorOverElement(e, proyectoDos)) {

            // Si el cursor está dentro del área de "terceraImagen", mostrar el custom-text
            textElement.style.display = "block";

            // Puedes cambiar el texto dependiendo de tus necesidades
            textElement.innerText = "zero";

            // Ajustar la posición del texto con un retardo
            setTimeout(() => {
                const offset = 15; // Ajusta la distancia en píxeles por encima del cursor
                textElement.style.left = `${x}px`;
                textElement.style.top = `${y - offset}px`;
            }, 100);
        } else if (isCursorOverElement(e, proyectoTres)) {
            // Si el cursor está dentro del área de "terceraImagen", mostrar el custom-text
            textElement.style.display = "block";

            // Puedes cambiar el texto dependiendo de tus necesidades
            textElement.innerText = "tebay";

            // Ajustar la posición del texto con un retardo
            setTimeout(() => {
                const offset = 15; // Ajusta la distancia en píxeles por encima del cursor
                textElement.style.left = `${x}px`;
                textElement.style.top = `${y - offset}px`;
            }, 100);
        } 
        else if (isCursorOverElement(e, quintaImagen)) {
            // Si el cursor está dentro del área de "terceraImagen", mostrar el custom-text
            textElement.style.display = "block";

            // Puedes cambiar el texto dependiendo de tus necesidades
            textElement.innerText = "gallery";

            // Ajustar la posición del texto con un retardo
            setTimeout(() => {
                const offset = 15; // Ajusta la distancia en píxeles por encima del cursor
                textElement.style.left = `${x}px`;
                textElement.style.top = `${y - offset}px`;
            }, 100);
        } 
    }

    window.addEventListener("resize", () => {
        adjustCursorSize();
    });

    adjustCursorSize();

    function adjustCursorSize() {
        // Ajusta el tamaño del cursor según la escala del zoom
        let zoomLevel = (document.body.clientWidth / window.innerWidth) * 100;
        let cursorSize = 46; // Tamaño base del cursor

        // Establece el tamaño del cursor utilizando una unidad relativa
        innerCursor.style.width = `${cursorSize / zoomLevel}vw`;
        innerCursor.style.height = `${cursorSize / zoomLevel}vw`;
    }

    function isCursorOverElement(event, element) {
        // const rect = element.getBoundingClientRect();
        // return (
        //     event.clientX >= rect.left &&
        //     event.clientX <= rect.right &&
        //     event.clientY >= rect.top &&
        //     event.clientY <= rect.bottom
        // );
    }
});