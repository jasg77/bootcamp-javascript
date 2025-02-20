export class Jugador {
    private puntos: number = 0;
  
    constructor() {}
  
    obtenerCarta(valor: number): void {
      this.puntos += valor;
    }
  
    getPuntos(): number {
      return this.puntos;
    }
  }
  