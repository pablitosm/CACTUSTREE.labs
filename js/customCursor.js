document.addEventListener("DOMContentLoaded", function () {

    let innerCursor = document.querySelector(".inner-cursor");
    let outerCursor = document.querySelector(".outer-cursor");

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
    
        if (outerCursor.style.display === "block") {
            setTimeout(() => {
                outerCursor.style.left = `${x}px`;
                outerCursor.style.top = `${y}px`;
            }, 200);
        }
    }

    window.addEventListener("resize", () => {
        adjustCursorSize();
    });

    adjustCursorSize();

    function adjustCursorSize() {
        let zoomLevel = (document.body.clientWidth / window.innerWidth) * 100;
        let cursorSize = 46;
        
        innerCursor.style.width = `${cursorSize / zoomLevel}vw`;
        innerCursor.style.height = `${cursorSize / zoomLevel}vw`;
    }
});