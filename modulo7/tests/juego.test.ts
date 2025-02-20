import { describe, it, expect } from 'vitest';
import { Juego } from '../src/juego';
import { Jugador } from '../src/jugador';

describe('Juego', () => {
  it('debería determinar si un jugador ha ganado', () => {
    const jugador = new Jugador();
    jugador.obtenerCarta(5);
    jugador.obtenerCarta(2);
    const juego = new Juego(jugador);
    expect(juego.haGanado()).toBe(true);
  });

  it('debería determinar si un jugador ha perdido', () => {
    const jugador = new Jugador();
    jugador.obtenerCarta(5);
    jugador.obtenerCarta(4);
    const juego = new Juego(jugador);
    expect(juego.haGanado()).toBe(false);
  });
});
