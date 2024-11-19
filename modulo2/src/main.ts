import "./style.css";

console.log("Hello Typescript!");


// Definimos las variables
const totalCena = 120; // Costo total de la cena
const costoBebidas = 18; // Costo de las bebidas
const numeroAmigos = 6; // Número de amigos

// Calculamos el costo de la comida
const costoComida = totalCena - costoBebidas;

// Calculamos cuánto tendría que pagar cada comensal
const costoPorPersona = costoComida / numeroAmigos;

// Mostramos el resultado por consola
console.log(`Cada comensal tendría que pagar ${costoPorPersona.toFixed(2)} € para dividir los costos de manera equitativa.`);
