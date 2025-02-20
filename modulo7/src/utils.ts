export function generarNumeroAleatorio(): number {
    return Math.floor(Math.random() * 11);
  }
  
  export function calcularResultado(valor: number): number {
    return valor > 7 ? valor + 2 : valor;
  }
  