interface Reserva {
    tipoHabitacion: "standard" | "suite";
    pax: number;
    noches: number;
  }
  
  const reservas: Reserva[] = [
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 3,
    },
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 4,
    },
    {
      tipoHabitacion: "suite",
      pax: 2,
      noches: 1,
    },
  ];
  
  class ReservaHotel {
    protected reservas: Reserva[];
    protected precios: { [key: string]: number };
    protected IVA: number = 0.21;
  
    constructor(reservas: Reserva[], precios: { [key: string]: number }) {
      this.reservas = reservas;
      this.precios = precios;
    }
  
    calcularSubtotal(): number {
      let subtotal = 0;
      this.reservas.forEach((reserva) => {
        const precioBase = this.precios[reserva.tipoHabitacion];
        const precioPorPersona = reserva.pax > 1 ? (reserva.pax - 1) * 40 : 0;
        subtotal += (precioBase + precioPorPersona) * reserva.noches;
      });
      return subtotal;
    }
  
    calcularTotal(): number {
      const subtotal = this.calcularSubtotal();
      return subtotal + subtotal * this.IVA;
    }
  }
  