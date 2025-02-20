import { Jugador } from './jugador';

export class Juego {
  private jugador: Jugador;

  constructor(jugador: Jugador) {
    this.jugador = jugador;
  }

  haGanado(): boolean {
    return this.jugador.getPuntos() <= 7.5;
  }
}
