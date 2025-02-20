import { describe, it, expect } from 'vitest';
import { generarNumeroAleatorio, calcularResultado } from '../src/utils';

describe('generarNumeroAleatorio', () => {
  it('debería generar un número entre 0 y 10', () => {
    const numero = generarNumeroAleatorio();
    expect(numero).toBeGreaterThanOrEqual(0);
    expect(numero).toBeLessThanOrEqual(10);
  });
});

describe('calcularResultado', () => {
  it('debería sumar 2 si el número es mayor que 7', () => {
    expect(calcularResultado(8)).toBe(10);
  });

  it('no debería sumar 2 si el número es menor o igual a 7', () => {
    expect(calcularResultado(7)).toBe(7);
  });
});
