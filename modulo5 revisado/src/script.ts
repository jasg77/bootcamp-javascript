document.addEventListener("DOMContentLoaded", () => {
  let puntuacion: number = 0;
  let juegoTerminado: boolean = false;

  const cartas = [
    { valor: 1, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg" },
    { valor: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg" },
    { valor: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg" },
    { valor: 4, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg" },
    { valor: 5, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg" },
    { valor: 6, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg" },
    { valor: 7, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg" },
    { valor: 0.5, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg" },
    { valor: 0.5, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg" },
    { valor: 0.5, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg" }
  ];

  function muestraPuntuacion() {
    const display = document.getElementById("puntuacion");
    if (display) {
      display.textContent = `Puntuación: ${puntuacion}`;
    }
  }

  function dameCarta() {
    const indice = Math.floor(Math.random() * cartas.length);
    return cartas[indice];
  }

  function mostrarCarta(carta: { valor: number, imagen: string }) {
    const img = document.getElementById("carta") as HTMLImageElement;
    if (img) {
      img.src = carta.imagen;
    }
  }

  function actualizarMensaje(mensaje: string) {
    const mensajeDisplay = document.getElementById("mensaje");
    if (mensajeDisplay) {
      mensajeDisplay.textContent = mensaje;
    }
  }

  document.getElementById("pedir-carta")?.addEventListener("click", () => {
    if (!juegoTerminado) {
      const carta = dameCarta();
      mostrarCarta(carta);
      puntuacion += carta.valor;
      muestraPuntuacion();
      if (puntuacion > 7.5) {
        actualizarMensaje("Game Over");
        juegoTerminado = true;
      }
    }
  });

  document.getElementById("me-planto")?.addEventListener("click", () => {
    if (!juegoTerminado) {
      juegoTerminado = true;
      if (puntuacion < 4) {
        actualizarMensaje("Has sido muy conservador");
      } else if (puntuacion === 5) {
        actualizarMensaje("Te ha entrado el canguelo eh?");
      } else if (puntuacion >= 6 && puntuacion < 7.5) {
        actualizarMensaje("Casi casi...");
      } else if (puntuacion === 7.5) {
        actualizarMensaje("¡Lo has clavado! ¡Enhorabuena!");
      }
    }
  });

  document.getElementById("nueva-partida")?.addEventListener("click", () => {
    puntuacion = 0;
    juegoTerminado = false;
    muestraPuntuacion();
    mostrarCarta({ valor: 0, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg" });
    actualizarMensaje("");
  });

  document.getElementById("saber-que-habria-pasado")?.addEventListener("click", () => {
    if (juegoTerminado) {
      let mensaje = "Habrías sacado estas cartas adicionales:";
      while (puntuacion <= 7.5) {
        const carta = dameCarta();
        mensaje += ` ${carta.valor}`;
        puntuacion += carta.valor;
      }
      actualizarMensaje(mensaje);
    }
  });

  muestraPuntuacion();
});
