import { describe, it, expect } from 'vitest';
import { valorCarta } from '../src/carta';

describe('valorCarta', () => {
  it('debería devolver el valor correcto de la carta', () => {
    expect(valorCarta("As")).toBe(1);
    expect(valorCarta("Rey")).toBe(0.5);
    expect(valorCarta("Cinco")).toBe(5);
  });
});
