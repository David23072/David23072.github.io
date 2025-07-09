document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("genero-selector");

  function filtrarGenero(generoId) {
    const secciones = document.querySelectorAll(".seccion-libros");
    secciones.forEach(section => {
      const carrusel = section.querySelector(".carrusel");
      if (generoId === "todos") {
        section.style.display = "block";
      } else {
        section.style.display = carrusel?.id === generoId ? "block" : "none";
      }
    });
  }

  selector.addEventListener("change", (e) => {
    filtrarGenero(e.target.value);
  });

  // Mostrar todas por defecto al cargar
  filtrarGenero("todos");
});
