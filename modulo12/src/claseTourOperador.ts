class ReservaTourOperador extends ReservaHotel {
    private descuento: number = 0.15;
  
    constructor(reservas: Reserva[]) {
      const precios = {
        standard: 100,
        suite: 100,
      };
      super(reservas, precios);
    }
  
    calcularSubtotal(): number {
      const subtotal = super.calcularSubtotal();
      return subtotal - subtotal * this.descuento;
    }
  }
  