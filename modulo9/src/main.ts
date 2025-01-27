import "./style.css";

console.log("Hello Typescript!");


type TipoIva =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva";

interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
}

interface LineaTicket {
  producto: Producto;
  cantidad: number;
}

interface ResultadoLineaTicket {
  nombre: string;
  cantidad: number;
  precioSinIva: number;
  tipoIva: TipoIva;
  precioConIva: number;
}

interface ResultadoTotalTicket {
  totalSinIva: number;
  totalConIva: number;
  totalIva: number;
}

interface TotalPorTipoIva {
  tipoIva: TipoIva;
  cuantia: number;
}

interface TicketFinal {
  lineas: ResultadoLineaTicket[];
  total: ResultadoTotalTicket;
  desgloseIva: TotalPorTipoIva[];
}

const productos: LineaTicket[] = [
  {
    producto: {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: "Perfume",
      precio: 20,
      tipoIva: "general",
    },
    cantidad: 3,
  },
  {
    producto: {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    },
    cantidad: 6,
  },
  {
    producto: {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
    },
    cantidad: 1,
  },
];

const calcularIva = (precio: number, tipoIva: TipoIva): number => {
  const porcentajesIva: { [key in TipoIva]: number } = {
    general: 21,
    reducido: 10,
    superreducidoA: 5,
    superreducidoB: 4,
    superreducidoC: 0,
    sinIva: 0,
  };
  return (precio * porcentajesIva[tipoIva]) / 100;
};

const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const resultadoLineas: ResultadoLineaTicket[] = [];
  const desgloseIva: { [key in TipoIva]: number } = {
    general: 0,
    reducido: 0,
    superreducidoA: 0,
    superreducidoB: 0,
    superreducidoC: 0,
    sinIva: 0,
  };

  let totalSinIva = 0;
  let totalIva = 0;

  lineasTicket.forEach((linea) => {
    const precioSinIva = linea.producto.precio * linea.cantidad;
    const iva = calcularIva(precioSinIva, linea.producto.tipoIva);
    const precioConIva = precioSinIva + iva;

    resultadoLineas.push({
      nombre: linea.producto.nombre,
      cantidad: linea.cantidad,
      precioSinIva: parseFloat(precioSinIva.toFixed(2)),
      tipoIva: linea.producto.tipoIva,
      precioConIva: parseFloat(precioConIva.toFixed(2)),
    });

    totalSinIva += precioSinIva;
    totalIva += iva;
    desgloseIva[linea.producto.tipoIva] += iva;
  });

  const totalConIva = totalSinIva + totalIva;

  const resultadoTotal: ResultadoTotalTicket = {
    totalSinIva: parseFloat(totalSinIva.toFixed(2)),
    totalConIva: parseFloat(totalConIva.toFixed(2)),
    totalIva: parseFloat(totalIva.toFixed(2)),
  };

  const resultadoDesgloseIva: TotalPorTipoIva[] = Object.keys(desgloseIva).map(
    (tipoIva) => ({
      tipoIva: tipoIva as TipoIva,
      cuantia: parseFloat(desgloseIva[tipoIva as TipoIva].toFixed(2)),
    })
  );

  return {
    lineas: resultadoLineas,
    total: resultadoTotal,
    desgloseIva: resultadoDesgloseIva,
  };
};

// Ejemplo de uso
const ticket = calculaTicket(productos);
console.log(ticket);
