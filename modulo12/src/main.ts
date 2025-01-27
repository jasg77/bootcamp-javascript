import "./style.css";

console.log("Hello Typescript!");


const reservasClienteParticular = new ReservaClienteParticular(reservas);
console.log("Subtotal Cliente Particular:", reservasClienteParticular.calcularSubtotal());
console.log("Total Cliente Particular:", reservasClienteParticular.calcularTotal());

const reservasTourOperador = new ReservaTourOperador(reservas);
console.log("Subtotal Tour Operador:", reservasTourOperador.calcularSubtotal());
console.log("Total Tour Operador:", reservasTourOperador.calcularTotal());
