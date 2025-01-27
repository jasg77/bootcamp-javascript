class ReservaClienteParticular extends ReservaHotel {
    constructor(reservas: Reserva[]) {
      const precios = {
        standard: 100,
        suite: 150,
      };
      super(reservas, precios);
    }
  }
  