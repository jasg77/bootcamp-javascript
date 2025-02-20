export function valorCarta(carta: string): number {
    const valores: { [key: string]: number } = {
      "As": 1,
      "Dos": 2,
      "Tres": 3,
      "Cuatro": 4,
      "Cinco": 5,
      "Seis": 6,
      "Siete": 7,
      "Sota": 0.5,
      "Caballo": 0.5,
      "Rey": 0.5
    };
    return valores[carta] || 0;
  }
  