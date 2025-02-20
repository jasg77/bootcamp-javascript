import { describe, it, expect } from 'vitest';
import { Jugador } from '../src/jugador';

describe('Jugador', () => {
  it('debería sumar correctamente los puntos de las cartas obtenidas', () => {
    const jugador = new Jugador();
    jugador.obtenerCarta(3);
    jugador.obtenerCarta(4);
    expect(jugador.getPuntos()).toBe(7);
  });
});
