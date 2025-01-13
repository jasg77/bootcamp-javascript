const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Pediatra") {
        return true;
      }
    }
    return false;
  };
  