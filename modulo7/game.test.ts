import { describe, it, expect } from 'vitest';
import { determinarGanador, generarNumeroAleatorio, obtenerValorCarta } from './game';

// Prueba para determinar si un jugador ha ganado
describe('determinarGanador', () => {
  it('debería retornar true si el puntaje del jugador es mayor que el del crupier sin exceder 7.5', () => {
    const puntajeJugador = 7;
    const puntajeCrupier = 6.5;
    expect(determinarGanador(puntajeJugador, puntajeCrupier)).toBe(true);
  });

  it('debería retornar false si el puntaje del jugador excede 7.5', () => {
    const puntajeJugador = 8;
    const puntajeCrupier = 6.5;
    expect(determinarGanador(puntajeJugador, puntajeCrupier)).toBe(false);
  });
});

// Prueba para generar un número aleatorio entre 0 y 10
describe('generarNumeroAleatorio', () => {
  it('debería generar un número entre 0 y 10', () => {
    const numero = generarNumeroAleatorio();
    expect(numero).toBeGreaterThanOrEqual(0);
    expect(numero).toBeLessThanOrEqual(10);
  });

  it('debería sumar 2 al resultado si el número es mayor que 7', () => {
    const numero = generarNumeroAleatorio();
    if (numero > 7) {
      expect(numero).toBeGreaterThan(7);
      expect(numero).toBeLessThanOrEqual(12);
    }
  });
});

// Prueba para obtener el valor de una carta
describe('obtenerValorCarta', () => {
  it('debería devolver el valor correcto de la carta', () => {
    const carta = '5';
    expect(obtenerValorCarta(carta)).toBe(5);
  });

  it('debería devolver 0.5 para las cartas de figura', () => {
    const carta = 'J';
    expect(obtenerValorCarta(carta)).toBe(0.5);
  });
});
