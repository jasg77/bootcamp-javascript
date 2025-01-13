const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Pediatra") {
        pacientes[i].especialidad = "Medico de familia";
      }
    }
    return pacientes;
  };
  