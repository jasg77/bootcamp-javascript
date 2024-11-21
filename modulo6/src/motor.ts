import { Carta, cartas } from './model';

export class Juego {
  puntuacion: number = 0;
  juegoTerminado: boolean = false;

  dameCarta(): Carta {
    const indice = Math.floor(Math.random() * cartas.length);
    return cartas[indice];
  }

  sumarPuntuacion(carta: Carta): void {
    this.puntuacion += carta.valor;
    if (this.puntuacion > 7.5) {
      this.juegoTerminado = true;
    }
  }

  reset(): void {
    this.puntuacion = 0;
    this.juegoTerminado = false;
  }
}
