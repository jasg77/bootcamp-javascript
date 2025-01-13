import { Juego } from './motor';
import { Carta } from './model';

const juego = new Juego();

function muestraPuntuacion(): void {
  const display = document.getElementById("puntuacion");
  if (display) {
    display.textContent = `Puntuación: ${juego.puntuacion}`;
  }
}

function mostrarCarta(carta: Carta): void {
  const img = document.getElementById("carta") as HTMLImageElement;
  if (img) {
    img.src = carta.imagen;
  }
}

function actualizarMensaje(mensaje: string): void {
  const mensajeDisplay = document.getElementById("mensaje");
  if (mensajeDisplay) {
    mensajeDisplay.textContent = mensaje;
  }
}

document.getElementById("pedir-carta")?.addEventListener("click", () => {
  if (!juego.juegoTerminado) {
    const carta = juego.dameCarta();
    mostrarCarta(carta);
    juego.sumarPuntuacion(carta);
    muestraPuntuacion();
    if (juego.juegoTerminado) {
      actualizarMensaje("Game Over");
    }
  }
});

document.getElementById("me-planto")?.addEventListener("click", () => {
  if (!juego.juegoTerminado) {
    juego.juegoTerminado = true;
    if (juego.puntuacion < 4) {
      actualizarMensaje("Has sido muy conservador");
    } else if (juego.puntuacion === 5) {
      actualizarMensaje("Te ha entrado el canguelo eh?");
    } else if (juego.puntuacion >= 6 && juego.puntuacion < 7.5) {
      actualizarMensaje("Casi casi...");
    } else if (juego.puntuacion === 7.5) {
      actualizarMensaje("¡Lo has clavado! ¡Enhorabuena!");
    }
  }
});

document.getElementById("nueva-partida")?.addEventListener("click", () => {
  juego.reset();
  muestraPuntuacion();
  mostrarCarta({ valor: 0, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg" });
  actualizarMensaje("");
});

muestraPuntuacion();
