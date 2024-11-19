document.addEventListener("DOMContentLoaded", () => {
    let turnoActual: number = 1;
  
    function actualizarDisplay() {
      const display = document.getElementById("numero-turno");
      if (display) {
        display.textContent = turnoActual.toString().padStart(2, '0');
      }
    }
  
    document.getElementById("anterior")?.addEventListener("click", () => {
      if (turnoActual > 0) {
        turnoActual--;
        actualizarDisplay();
      }
    });
  
    document.getElementById("siguiente")?.addEventListener("click", () => {
      turnoActual++;
      actualizarDisplay();
    });
  
    document.getElementById("reset")?.addEventListener("click", () => {
      turnoActual = 0;
      actualizarDisplay();
    });
  
    document.getElementById("cambiar-turno")?.addEventListener("click", () => {
      const inputTurno = document.getElementById("input-turno") as HTMLInputElement;
      const nuevoTurno = parseInt(inputTurno.value);
      if (!isNaN(nuevoTurno)) {
        turnoActual = nuevoTurno;
        actualizarDisplay();
      }
    });
  
    actualizarDisplay();
  });
  