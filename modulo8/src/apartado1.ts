const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    const pacientesPediatria: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Pediatra") {
        pacientesPediatria.push(pacientes[i]);
      }
    }
    return pacientesPediatria;
  };
  const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
    const pacientesPediatriaMenorDeDiez: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
        pacientesPediatriaMenorDeDiez.push(pacientes[i]);
      }
    }
    return pacientesPediatriaMenorDeDiez;
  };
  