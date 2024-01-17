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

// const toggleDarkModeButton = document.getElementById("mode");

// toggle.addEventListener('change', () => {
//     document.body.classList.toggle('dark');
// });

function playVideo(video) {
    video.currentTime = 0;
    video.play();
}

function onSubmit(token) {
    document.getElementById("demo-form").submit();
}

window.addEventListener(("scroll"),()=>{
    document.querySelector("#Home h1").style.marginTop = `${window.scrollY * 1.5}px`
    document.querySelector("#Mountain1").style.marginBottom = `${106 - window.scrollY}px`
    document.querySelector("#leftCloud").style.marginLeft = `-${window.scrollY}px`
    document.querySelector("#leftCloud1").style.marginLeft = `-${window.scrollY}px`
    document.querySelector("#leftCloud2").style.marginLeft = `-${window.scrollY}px`
    document.querySelector("#mainCloud").style.marginTop = `-${window.scrollY}px`
    document.querySelector("#mainCloud1").style.marginTop = `-${window.scrollY}px`
    document.querySelector("#rightCloud").style.marginRight = `-${window.scrollY}px`
    document.querySelector("#rightCloud1").style.marginRight = `-${window.scrollY}px`
})

document.querySelectorAll('.container-Art img').forEach(img => {
    img.addEventListener('click', function() {
        const imgSrc = this.getAttribute('data-uncompressed');
        const bigImg = document.createElement('img');
        bigImg.src = imgSrc;
        bigImg.style.position = 'fixed';
        bigImg.style.zIndex = '1000';
        bigImg.style.width = '100%';
        bigImg.style.height = '100%';
        bigImg.style.objectFit = 'contain';
        bigImg.style.top = '0';
        bigImg.style.left = '0';
        bigImg.style.backgroundColor = 'var(--color-oscuro-LowOP)';
        bigImg.addEventListener('click', function() {
            document.body.removeChild(bigImg);
        });
        document.body.appendChild(bigImg);
    });
});

function enviarFormulario() {
    // Obtener los datos del formulario
    var formData = $("#miFormulario").serialize();

    // Validar que todos los campos estén llenos
    if (formIsValid()) {
        // Desactivar el botón para evitar envíos adicionales
        $("#miFormulario :input").prop("disabled", true);

        // Realizar la solicitud AJAX
        $.ajax({
            type: "POST",
            url: "https://api.web3forms.com/submit",
            data: formData,

            success: function(xhr, status, error) {
                console.error("Error:", xhr.responseText, status, error);
            },
            error: function(response) {
                // Manejar la respuesta aquí
                console.log(response);
                // Muestra el mensaje de éxito
                $("#mensajeExito").show();
            },
            complete: function() {
                // Reactivar el botón después de que se complete la solicitud
                $("#miFormulario :input").prop("disabled", false);
                
                // Vaciar los campos del formulario
                $("#miFormulario")[0].reset();
            }
        });
    } else {
        // Mostrar un mensaje de error o realizar otras acciones si el formulario no es válido
        console.log("Error: Todos los campos deben estar llenos");
    }
}

// Función para validar que todos los campos del formulario estén llenos
function formIsValid() {
    var isValid = true;
    
    // Verificar cada campo del formulario
    $("#miFormulario :input[required]").each(function() {
        if ($(this).val() === "") {
            isValid = false;
            return false;
        }
    });

    return isValid;
}


document.addEventListener('DOMContentLoaded', function() {

    grained('#granulado-container', {
        animate: true,
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.04,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1,
        grainChaos: 2,
        grainSpeed: 10
    });

    var loader = document.getElementById("preloader");
    var introShown = document.cookie.indexOf('introShown=true') !== -1;

    if (!introShown) {
        loader.classList.remove('hide');
        setTimeout(function() {
            loader.classList.add('hide');
            document.cookie = 'introShown=true';
        }, 5000);
    } else {
        loader.classList.add('hide');
    }
});

document.addEventListener("DOMContentLoaded", function () {

    let innerCursor = document.querySelector(".inner-cursor");
    let textElement = document.querySelector(".custom-text");

    let proyectoUno = document.getElementById("projects1");
    let proyectoDos = document.getElementById("projects2");
    let proyectoTres = document.getElementById("projects3");

    let momentoUno = document.getElementById("moment1");
    let momentoDos = document.getElementById("moment2");
    let momentoTres = document.getElementById("moment3");

    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
        let x = e.clientX;
        let y = e.clientY;

        innerCursor.style.left = `${x}px`;
        innerCursor.style.top = `${y}px`;

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
        }  else {
            // Si el cursor está fuera del área de "terceraImagen", ocultar el custom-text
            textElement.style.display = "none";
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
        var windowHeight = window.innerHeight;
        var scrollPosition = window.scrollY + windowHeight / 2;
    
        menuItems.forEach(function (menuItem) {
            var targetId = menuItem.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);
    
            var sectionTop = targetSection.offsetTop;
            var sectionBottom = sectionTop + targetSection.offsetHeight;
    
            if (sectionTop <= scrollPosition && sectionBottom > scrollPosition) {
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