document.addEventListener("DOMContentLoaded", () => {
    const estrellasContainer = document.querySelector(".estrellas");

    function crearEstrella() {
        const estrella = document.createElement("div");
        estrella.classList.add("estrella");

        // Posición aleatoria en el ancho de la pantalla
        estrella.style.left = Math.random() * 100 + "vw";
        estrella.style.animationDuration = Math.random() * 3 + 2 + "s"; // Entre 2 y 5 segundos

        estrellasContainer.appendChild(estrella);

        // Eliminar estrella después de la animación
        setTimeout(() => {
            estrella.remove();
        }, 6000);
    }

    // Crear estrellas de forma continua
    setInterval(crearEstrella, 200);
});
