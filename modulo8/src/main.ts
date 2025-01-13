import "./style.css";

console.log("Hello Typescript!");
// Definimos los géneros musicales como variables
const POP_ROCK = "🎵 Pop Rock";
const ROCK = "🎸 Rock";
const HARD_ROCK = "🤘 Hard Rock";
const CLASICA = "🎼 Clásica";

// Creamos una interfaz para representar a un grupo musical
interface GrupoMusical {
  nombre: string;
  añoFundacion: number;
  activo: boolean;
  genero: string;
}

// Creamos una lista de grupos musicales
const grupos: GrupoMusical[] = [
  { nombre: "The Beatles", añoFundacion: 1960, activo: true, genero: POP_ROCK },
  { nombre: "Queen", añoFundacion: 1970, activo: false, genero: ROCK },
  { nombre: "AC DC", añoFundacion: 1973, activo: true, genero: HARD_ROCK },
  { nombre: "Ludwig van Beethoven", añoFundacion: 1770, activo: false, genero: CLASICA },
  { nombre: "The Rolling Stones", añoFundacion: 1962, activo: true, genero: ROCK }
];

// Función para mostrar los grupos por consola
function mostrarGrupos(grupos: GrupoMusical[]) {
  grupos.forEach(grupo => {
    console.log(`%c${grupo.nombre}`, "font-size: 20px; background-color: green; font-weight: bold;");
    console.log(`Año de fundación: ${grupo.añoFundacion}`);
    console.log(`Activo: ${grupo.activo}`);
    console.log(`Género: ${grupo.genero}`);
    console.log('-------------------------');
  });
}

// Llamamos a la función para mostrar los grupos
mostrarGrupos(grupos);

