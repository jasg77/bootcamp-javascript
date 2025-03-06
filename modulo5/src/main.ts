document.addEventListener("DOMContentLoaded", () => {
    let puntuacion = 0;
    let juegoTerminado = false;

    function muestraPuntuacion() {
        const display = document.getElementById("score");
        if (display) {
            display.textContent = `Puntuación: ${puntuacion}`;
        }
    }

    function dameCarta() {
        const cartas = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const indice = Math.floor(Math.random() * cartas.length);
        return cartas[indice];
    }

    function mostrarCarta(carta: { valor?: number; imagen: string }) {
        const img = document.getElementById("carta");
        if (img && img instanceof HTMLImageElement) {
            img.src = carta.imagen;
        }
    }

    function actualizarMensaje(mensaje: string | null) {
        const mensajeDisplay = document.getElementById("mensaje");
        if (mensajeDisplay && mensaje) {
            mensajeDisplay.textContent = mensaje;
        } else if (mensajeDisplay) {
            mensajeDisplay.textContent = "";
        }
    }

    const obtenerNumeroAleatorio = () => {
        return Math.floor(Math.random() * 10);
    }

    const obtenerCarta = (numeroAleatorio: number) => {
        if (numeroAleatorio > 7) {
            return numeroAleatorio + 2;
        }
        return numeroAleatorio;
    }

    const obtenerUrlCarta = (carta: number) => {
        switch (carta) {
            case 1:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
            case 2:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
            case 3:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
            case 4:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
            case 5:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
            case 6:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
            case 7:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
            case 11:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
            case 12:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
            case 10:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
            default:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        }
    }

    const mostrarUrlCarta = (urlCarta: string) => {
        const elementoImagen = document.getElementById('carta');
        if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
            elementoImagen.src = urlCarta;
        }
    }

    const obtenerPuntos = (carta: number) => {
        if (carta > 7) {
            return 0.5;
        }
        return carta;
    }

    const sumarPuntos = (puntos: number) => {
        return puntuacion + puntos;
    }

    const actualizarPuntuacion = (puntosAcumulados: number) => {
        puntuacion = puntosAcumulados;
    }

    const comprobarPartida = () => {
        if (puntuacion === 7.5) {
            actualizarMensaje("¡Has ganado la partida!");
            juegoTerminado = true;
        } else if (puntuacion > 7.5) {
            actualizarMensaje("¡Has perdido la partida!");
            juegoTerminado = true;
        }

        if (juegoTerminado) {
            const botonPedirCarta = document.getElementById("drawCard");
            const botonMePlanto = document.getElementById("stand");
            if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
                botonPedirCarta.disabled = true;
            }
            if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
                botonMePlanto.disabled = true;
            }
            const botonNuevaPartida = document.getElementById("newGame");
            if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
                botonNuevaPartida.style.display = "block";
            }
        }
    }

    const pedirCarta = () => {
        const numeroAleatorio = obtenerNumeroAleatorio();
        const carta = obtenerCarta(numeroAleatorio);
        const urlCarta = obtenerUrlCarta(carta);
        mostrarUrlCarta(urlCarta);
        const puntoCarta = obtenerPuntos(carta);
        const puntosSumados = sumarPuntos(puntoCarta);
        actualizarPuntuacion(puntosSumados);
        muestraPuntuacion();
        comprobarPartida();
    }

    const botonPedirCarta = document.getElementById("drawCard");
    if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
        botonPedirCarta.addEventListener("click", () => {
            if (!juegoTerminado) {
                pedirCarta();
            }
        });
    }

    const botonMePlanto = document.getElementById("stand");
    if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
        botonMePlanto.addEventListener("click", () => {
            if (puntuacion < 4) {
                actualizarMensaje("Has sido muy conservador");
            } else if (puntuacion === 5) {
                actualizarMensaje("Te ha entrado el canguelo eh?");
            } else if (puntuacion >= 6 && puntuacion < 7.5) {
                actualizarMensaje("Casi casi...");
            } else if (puntuacion === 7.5) {
                actualizarMensaje("¡Lo has clavado! ¡Enhorabuena!");
            }
            juegoTerminado = true;
            comprobarPartida();
        });
    }

    document.getElementById("newGame")?.addEventListener("click", () => {
        puntuacion = 0;
        juegoTerminado = false;
        muestraPuntuacion();
        mostrarCarta({ valor: 0, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg" });
        actualizarMensaje(null);
        const botonPedirCarta = document.getElementById("drawCard");
        const botonMePlanto = document.getElementById("stand");
        if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
            botonPedirCarta.disabled = false;
        }
        if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
            botonMePlanto.disabled = false;
        }
        const botonNuevaPartida = document.getElementById("newGame");
        if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
            botonNuevaPartida.style.display = "none";
        }
    });

    muestraPuntuacion();
});