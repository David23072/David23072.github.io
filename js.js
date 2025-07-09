const secciones = {
  "nuevos-libros": [
    {
      titulo: "El Viaje Azul",
      imagen: "./portadas/azul.jpg",
      sinopsisCorta: "Un mundo mágico bajo el mar...",
      pagina: "./libros/libro1.html"
    },
    {
      titulo: "La Gente Más Feliz de la Tierra",
      imagen: "./img/la_gente_mas_felis_de_la_tierra.png",
      sinopsisCorta: "Una historia de fe, esperanza y milagros reales contada por su protagonista.",
      pagina: "./libros/libro2.html"
    },
    {
      titulo: "Luz entre los árboles",
      imagen: "./portadas/arboles.jpg",
      sinopsisCorta: "Una historia de esperanza en tiempos oscuros...",
      pagina: "./libros/libro3.html"
    },

        {
      titulo: "El Viaje Azul",
      imagen: "./portadas/azul.jpg",
      sinopsisCorta: "Un mundo mágico bajo el mar...",
      pagina: "./libros/libro1.html"
    },
    {
      titulo: "La Gente Más Feliz de la Tierra",
      imagen: "./img/la_gente_mas_felis_de_la_tierra.png",
      sinopsisCorta: "Una historia de fe, esperanza y milagros reales contada por su protagonista.",
      pagina: "./libros/libro2.html"
    },
    {
      titulo: "Luz entre los árboles",
      imagen: "./portadas/arboles.jpg",
      sinopsisCorta: "Una historia de esperanza en tiempos oscuros...",
      pagina: "./libros/libro3.html"
    },

    {
      titulo: "El Viaje Azul",
      imagen: "./portadas/azul.jpg",
      sinopsisCorta: "Un mundo mágico bajo el mar...",
      pagina: "./libros/libro1.html"
    },
    {
      titulo: "La Gente Más Feliz de la Tierra",
      imagen: "./img/la_gente_mas_felis_de_la_tierra.png",
      sinopsisCorta: "Una historia de fe, esperanza y milagros reales contada por su protagonista.",
      pagina: "./libros/libro2.html"
    },
    {
      titulo: "Luz entre los árboles",
      imagen: "./portadas/arboles.jpg",
      sinopsisCorta: "Una historia de esperanza en tiempos oscuros...",
      pagina: "./libros/libro3.html"
    }
  ],
  "proximamente-libros": [
    {
      titulo: "Código del alma",
      imagen: "./portadas/codigo.jpg",
      sinopsisCorta: "Secretos digitales que cambian vidas...",
      pagina: "./libros/libro4.html"
    },
    {
      titulo: "Sombras de Fuego",
      imagen: "./portadas/fuego.jpg",
      sinopsisCorta: "Dragones, guerra y traición...",
      pagina: "./libros/libro5.html"
    },
    {
      titulo: "Noche Eterna",
      imagen: "./portadas/noche.jpg",
      sinopsisCorta: "Una ciudad atrapada en la oscuridad...",
      pagina: "./libros/libro6.html"
    }
  ],
  "ficcion-libros": [
    {
      titulo: "Horizonte Perdido",
      imagen: "./portadas/horizonte.jpg",
      sinopsisCorta: "Una expedición sin regreso...",
      pagina: "./libros/libro7.html"
    },
    {
      titulo: "El Umbral",
      imagen: "./portadas/umbral.jpg",
      sinopsisCorta: "Una puerta que no debió abrirse...",
      pagina: "./libros/libro8.html"
    }
  ],
  "misterio-libros": [
    {
      titulo: "Susurros del Bosque",
      imagen: "./portadas/bosque.jpg",
      sinopsisCorta: "El bosque guarda secretos milenarios...",
      pagina: "./libros/libro9.html"
    }
  ],
  "romance-libros": [
    {
      titulo: "Las Estrellas Caídas",
      imagen: "./portadas/estrellas.jpg",
      sinopsisCorta: "¿Qué pasaría si las estrellas cayeran del cielo?",
      pagina: "./libros/libro10.html"
    }
  ]
};

function renderLibros(lista, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  lista.forEach((libro) => {
    const div = document.createElement("div");
    div.className = "libro";
    div.innerHTML = `
      <a href="${libro.pagina}">
        <img src="${libro.imagen}" alt="${libro.titulo}" />
        <h4>${libro.titulo}</h4>
        <div class="tooltip">${libro.sinopsisCorta}</div>
      </a>
    `;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  for (const seccion in secciones) {
    renderLibros(secciones[seccion], seccion);
  }
});


    function moverCircular(boton, direccion) {
      const carrusel = boton.parentElement.querySelector('.carrusel');
      const items = carrusel.querySelectorAll('.libro');
      if (items.length === 0) return;
      if (direccion === 1) {
        carrusel.appendChild(items[0]);
      } else {
        carrusel.insertBefore(items[items.length - 1], items[0]);
      }
    }